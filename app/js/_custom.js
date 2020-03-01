document.addEventListener("DOMContentLoaded", function() {

	// SELECT
	$('select').selectize({
		create: true
	});

// Name input
const nameInput = document.getElementById('user-name')
const nameCloseButton = document.querySelector('.user-name .input-icons_close')
let nameInputVal = nameInput.value

nameInput.onfocus = function() {
	nameInput.parentNode.classList.add('input-active')
	nameInputVal = this.value
}

$(document).click(function (e) {
	if(e.target != nameInput) {
		nameInput.parentNode.classList.remove('input-active')
	}
})

$(nameInput).keyup(function(event){
	if(event.keyCode == 13){
		nameInput.blur()
		nameInput.parentNode.classList.remove('input-active')
	}
})

nameCloseButton.addEventListener('click', function(){
	nameInput.value = nameInputVal
})

// Country input
const countryInput = document.getElementById('user-country')
const countryCloseButton = document.querySelector('.user-country .input-icons_close')
let countryInputVal = countryInput.value

countryInput.onfocus = function() {
	countryInput.parentNode.classList.add('input-active')
	countryInputVal = this.value
}

$(document).click(function (e) {
	if(e.target != countryInput) {
		countryInput.parentNode.classList.remove('input-active')
	}
})

$(countryInput).keyup(function(event){
	if(event.keyCode == 13){
		countryInput.blur()
		countryInput.parentNode.classList.remove('input-active')
	}
})

countryCloseButton.addEventListener('click', function(){
	countryInput.value = countryInputVal
})

// Language input
const languageInput = document.getElementById('user-lang')
const languageCloseButton = document.querySelector('.user-lang .input-icons_close')
let languageInputVal = languageInput.value

languageInput.onfocus = function() {
	languageInput.parentNode.classList.add('input-active')
	languageInputVal = this.value
}

$(document).click(function (e) {
	if(e.target != languageInput) {
		languageInput.parentNode.classList.remove('input-active')
	}
})

$(languageInput).keyup(function(event){
	if(event.keyCode == 13){
		languageInput.blur()
		languageInput.parentNode.classList.remove('input-active')
	}
})

languageCloseButton.addEventListener('click', function(){
	languageInput.value = languageInputVal
})

// Skills
const skillsInput = document.getElementById('user-addskills')
let skillsClose = document.getElementsByClassName('user-skills_close')
let userSkills = document.getElementById('user-skills')
let skillsInputVal = skillsInput.value
let arrSkills = document.getElementsByClassName('user-item')
let selectSkills = document.querySelector('.selectize-control .item')
let editeSkills = document.querySelector('.user-addskills .input-icons_close')
let findMatch = false

function SkillsClose(){
	for (var i = 0; i< skillsClose.length; i++) {
		skillsClose[i].addEventListener('click', function(event) {
			if(!event.target.parentNode.parentNode.id){
				event.target.parentNode.parentNode.remove()
			}
		})
	}	
}
SkillsClose()

skillsInput.onfocus = function() {
	skillsInput.parentNode.classList.add('input-active')
	skillsInput.value = ''
	skillsInputVal = this.value
}

$(skillsInput).keyup(function(event){
	if(event.keyCode == 13){
		checkTab()
		findMatch = false
		console.log(findMatch)
	}
})



editeSkills.addEventListener('click', function() {
	checkTab()
	findMatch = false
	console.log(findMatch)
})


function checkTab(){
	let userItems = document.querySelectorAll('.user-item .user-item_text')

	if((skillsInput.value != '') || (slillsInputVal =! 'Add skills')) {
		for (var i = 0; i < userItems.length; i++) {
			if(userItems[i].innerHTML == skillsInput.value) {
				findMatch = true
			}
		}

		if(!findMatch){
			addTab()
			skillsInput.blur()
			skillsInput.parentNode.classList.remove('input-active')
			skillsInput.value = 'Add skills'
			findMatch = false
		}
	}
}

function addTab(){
	skillsInputVal = skillsInput.value
	const tabClass = document.querySelector('.selectize-input .item').getAttribute('data-value')
	const tab = `
	<div class="user-item ${tabClass}"><span class="user-item_text">${skillsInputVal}</span><span class="user-skills_close"><i class="fa fa-times"></i></div>
	`
	userSkills.insertAdjacentHTML("beforeend", tab)
	skillsClose = document.getElementsByClassName('user-skills_close')
	arrSkills = document.getElementsByClassName('user-item')
	SkillsClose()
}


}); // END TAG
