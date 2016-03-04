var esprima = require('esprima');
var escodegen = require('escodegen');


function parseFinction(f){
	var funcStr = f.toString();
	funcStr = funcStr.replace(/^function [^\(]*\(/, "function sudeNAme(" )
	parsed = esprima.parse(funcStr);

	params = [];

	for (i in parsed.body[0].params)
		params.push(parsed.body[0].params[i].name )

	return { commands : parsed.body[0].body.body ,
			 params : params
		};

}


function isCommandSyncronous(command)
{
	var commandStr = escodegen.generate(command);
	if(commandStr.indexOf('__') == -1)
		return true;
	else
		return false;
}

function isCommandCondition(command)
{
	return (command.type == 'IfStatement')
}

// converting sync conditions to async
function processCondition(conditionCommand , otherCommands)
{
	// console.log(conditionCommand);
	// console.log('pppp');
	// console.log(escodegen.generate(conditionCommand));
	var conditionTest = escodegen.generate(conditionCommand.test);

	if(conditionCommand.alternate == null)
	{
		conditionCommand.alternate = {
            "type": "BlockStatement",
            "body": []
        };

	}

	if(conditionCommand.consequent.type != 'BlockStatement') // to convery if(1) f() -> if(1){f()}
	{
		conditionCommand.consequent = {
			 "type": "BlockStatement",
			 "body" : [conditionCommand.consequent]
		};
	}

	if(conditionCommand.alternate.type != 'BlockStatement' ) // to convery if(1) f() -> if(1){f()}
	{
		conditionCommand.alternate = {
			 "type": "BlockStatement",
			 "body" : [conditionCommand.alternate]
		};
	}

	var trueExpressionAsync = sync2async (conditionCommand.consequent.body.concat(otherCommands) ) ;
	var falseExpressionAsync = sync2async (conditionCommand.alternate.body.concat(otherCommands) ) ;

	return 'if(' + conditionTest +"){ "
			+ trueExpressionAsync + '}'
			+ 'else {' + falseExpressionAsync + '}';

}

/// takes an array of parsed commands and returns a string of async code
function sync2async(commands)
{
	if(commands.length == 0)
		return "";

	var firstCommand = commands[0];
	var otherCommands = commands.slice(1); // except 1st

	if(isCommandCondition(firstCommand))
	{
		return processCondition(firstCommand , otherCommands);
	}

	if(isCommandSyncronous(firstCommand))
	{
		return escodegen.generate(firstCommand) + sync2async(otherCommands);
	}
	else
	{
		var otherSynced = sync2async(otherCommands);
		var first = escodegen.generate(firstCommand);
		return first.replace(/__\(([^\)]*)\)/, "function($1){" + otherSynced + '}' );
	}



}

function __(syncFunction)
{
	var parsedFunction =  parseFinction(syncFunction);
	var functionCommands = parsedFunction.commands;
	var functionParams = parsedFunction.params;

	var asyncFunctionContent = sync2async(functionCommands);

	return new Function(functionParams , asyncFunctionContent);
}

module.exports = __;



