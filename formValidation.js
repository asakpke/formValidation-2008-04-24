// JavaScript Document

// Depends on dateValidation.js FOR date validation

function validateEmpty(field, name)
{
	if(field.value == "")
	{
		alert(name + ' is required field');
		field.focus();
		return true;
	}
	
	return false;
}

function isEmpty(field)
{
	if(field.value != "") {
		//alert(field.name + ' not empty');
		return false;
	}
	
	//alert(field.name + ' yes empty');	
	return true;
}

function validateEmptyExistingText(field, name,existing_text)
{
	if(field.value == "" || field.value == existing_text)
	{
		alert(name + ' is required field');
		field.focus();
		return true;
	}
	
	return false;
}

function validateLessLength(field, name,size)
{
	if(field.value.length < size || field.value.length > size)
	{
		alert(name + ' is invalid, it must be of size ' + size);
		field.focus();
		return true;
	}
	
	return false;
}

function validateNum(field, name)
{
	if(field.value != "" && isNaN(field.value))
	{
		field.select();
		alert(name + ' contain invalid characters. Enter only numeric values')
		field.focus()
		return true
	}
	
	return false
}

function validateContainNum(field, name)
{
	var reg = /^.*[0-9].*$/; // by Aamir disable multiple .
	
   	if(field.value != "" && reg.test(field.value) == false) 
	{
		field.select();		
      	alert(name + ' is invalid, it must contain a numeric digit.');
		field.focus()
		return true
	}
	
	return false;	
}


function validateDate(field,name,format)
{
	if(field.value != "" && isDate(field.value,format) == false )
	{
		field.select();
		alert(name + ' is not a valid date. Enter only valid values')
		field.focus()
		return true
	}
	
	return false;
}

function validateGreaterDate(date1,date2,dateformat)
{	
	if(compareDates(date1.value,dateformat,date2.value,dateformat) == 1)//   1 if date1 is greater than date2
	{
		date1.select();
		alert('First date is greater than 2nd date');
		date1.focus()
		return true;
	}
		
	return false;
}


function validateEmail(field)
{	
	//var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var reg = /^([A-Za-z0-9_\-\.])+\@(([A-Za-z0-9_\-])+\.)+([A-Za-z]{2,4})$/; // by Aamir disable multiple .
   	if(field.value != "" && reg.test(field.value) == false) 
	{
		field.select();		
      	alert('Please Enter a Valid Email Address');
		field.focus()
		return true
	}
	
	return false;
}

function validateSame(field1,field2)
{
	if(field1.value != field2.value)
	{
		field2.select();
		alert('both fields must match');
		field2.focus();
		return true;
	}
	
	return false;
}

function validateDifferent(field1,field2)
{
	if(field1.value == field2.value)
	{
		field2.select();
		alert('both fields must be different');
		field2.focus();
		return true;
	}
	
	return false;
}

function validateEmptyRadio(field, name)
{
	if(field[0].checked == false && field[1].checked == false)
	{
		alert(name + ' is required field');
		return true;
	}
	
	return false;
}

function validateEmptyCheckbox(field, name)
{
	if(field.checked == false)
	{
		alert(name + ' is required field');
		//field[0].focus();
		return true;
	}
	
	return false;
}

function validateEmptyCheckboxes(field)
{		
	for( v=0; v < field.length; v++) {
		if(field[v].checked) {	
			return false;						
		}

	}
	
	field[0].focus();
	alert('Select atleast one checkbox');
	return true;	
}


function isEmptyCheckbox(field)
{
	if(field.checked == false) {		
		return true;
	}
	
	return false;
}

function validateEmptyCombo(field, name)
{	
	if(field.selectedIndex == 0)
	{		
		field.focus();
      	alert('Please select a ' + name);		
		return true;
	}
		
	return false;
}

function isEmptyCombo(field)
{	
	if(field.selectedIndex == 0) {
		return true;
	}
	
	return false;
}

function validateUploadImg(field)
{
	var img = field.value;
	var ext;		
	
	//alert('field.value = ' + field.value);
	
	ext = img.substring(img.lastIndexOf('.') + 1,img.length);
	
	//alert('ext = ' + ext);
	
	if(img.length != 0)
	{
		if(!(ext == "JPG" || ext == "GIF" || ext == "jpg" || ext == "gif" || ext == "PNG" || ext == "png"))
		{
			alert("Please select a image file instead."); //Informs user of empty field
			field.select();
			field.focus();
			return true; //This prevents the form from being submitted
		}
	}
	
	return false;
}

function validateSpamCode(field, code)
{
	if(field.value != code)
	{
		alert('Please enter the correct code');
		field.focus();
		return true;
	}
	
	return false;
}

/*
<script language="javascript" src="dateValidation.js"></script>
<script language="javascript" src="formValidation.js"></script>
<script language="javascript">
function formValidation(frm)
{					
	if(	validateEmpty(frm.fname, 'Name') ||
		validateEmpty(frm.lname, 'Name') ||
		validateEmpty(frm.email, 'Email') ||
		
		validateEmail(frm.email) ||
		
		validateEmptyCombo(frm.size, 'Company Size') ||
		validateEmptyCombo(frm.time, 'Best Time to Contact') ||
		validateEmptyCombo(frm.method, 'Preferred Contact Method') ||
		validateEmptyCombo(frm.reason, 'Reason for Inquiry') ||
		
		validateEmpty(frm.comments, 'Questions/Comments')
			) {
		return false;
	}
		
	return true;	
}
</script>
<form method="post" action="info.php" onsubmit="return formValidation(this);">
*/


/*
function formValidation()
{	
	for(var v=0; v < arguments.length; )
	{
		switch(arguments[v])
		{
		case 'validateEmpty': // validateEmpty(field, name)
			if(validateEmpty(arguments[v+1],arguments[v+2]))
				return false;
				
			v += 3;
			break;
			
		case 'validateNum': // validateNum(field, name)
			if(validateNum(arguments[v+1],arguments[v+2]))
				return false;
				
			v += 3;
			break;
			
		case 'validateDate': // validateDate(field,name,format)
			if(validateDate(arguments[v+1],arguments[v+2],arguments[v+3]))
				return false;
				
			v += 4;
			break;
			
		case 'validateEmail': // validateEmail(field)
			if(validateEmail(arguments[v+1]))
				return false;
				
			v += 2
			break;
		
		case 'validateSame':
			if(validateSame(arguments[v+1],arguments[v+2]))
				return false;
				
			v += 3;		
			break;
			
		case 'validateGreaterDate': // validateGreaterDate(date1,date2,dateformat)
			if(validateGreaterDate(arguments[v+1],arguments[v+2],arguments[v+3]))
				return false;
				
			v += 4;
			break;
			
		case 'validateEmptyRadio': // validateEmptyRadio(field, name)
			if(validateEmptyRadio(arguments[v+1],arguments[v+2])
				return false;
				
			v += 3;
			break;
			
		case 'validateEmptyCheck': // validateEmptyCheck(field, name)
			if(validateEmptyCheck(arguments[v+1],arguments[v+2])
				return false;
				
			v += 3;
			break;
		}		
	}		
}
*/