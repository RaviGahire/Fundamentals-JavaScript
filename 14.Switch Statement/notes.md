# switch have default behavior is if one condition mstched with given vslue its run the given condtion and also run the remaining code.

# IMP Always remeber with data type you pass the switch case. see the example for your understanding.
# IMP Behinde the sence switch case check the condtion with strict equality (===)

---> if your pass data in string so have to do like this.

const day = sunday
switch (day){
case 'sunday':
---Your code here---
break;
}

---> if your pass data in number so have to do like this.

const dayNumber = 1
switch (dayNumber){
case 1:
---Your code here---
break;
}

and same as other data types.

# IMP switch is alreday evaluate the all conditions

# IMP Alwys remember what is we are passing in Switch (true) or (false)

Switch( true ) than swich case start finding true condition in switch block.
Switch is (false) than switch case start finding flase condition in switch block.
Example.

In following example we alreday pass the true condition to the switch.
we know switch is already evaulated so directly loop goes on third condition and execute the code .

switch (true){
case false :
break;
case false :
break;
case true :
break;

}
Here In following example we alreday pass the false condition to the switch.
we know switch is already evaulated so directly loop goes on third condition and execute the false condtion .

switch (false){
case true:
<code here>
break;
case true:
<code here>
break;
case false:
<code here>
break;

}

# IMP if switch case have multiple true conditions so and we also pass the true in switch lets see the example

Explanation: In the following example, we pass a true condition to the switch. However, even though two conditions are true, the switch does not execute the second true condition. If the first true condition is executed, the break keyword causes the execution to exit the switch case loop. The same applies to false conditions. If we do not use the break keyword, it is possible to execute both conditions.

switch (true){
case false:
<code here>
break;
case true:
<code here>
break;
case ture:
<code here>
break;

}
