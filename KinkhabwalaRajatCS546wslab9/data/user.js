const bcrypt = require("bcrypt-nodejs");
const users = [
  { _id: "1245325124124", username: "masterdetective123", hashedPassword: bcrypt.hashSync("elementarymydearwatson"), firstName: "Sherlock", lastName: "holmes", profession: "Detective", bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a \"consulting detective\" in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard." },
  { _id: "723445325124124", username: "lemon", hashedPassword: bcrypt.hashSync("damnyoujackdonaghy"), firstName: "Elizabeth", lastName: "Lemon", profession:"Writer", bio:"Elizabeth Miervaldis \"Liz\" Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan." },
  { _id: "72121412356742", username: "theboywholived", hashedPassword: bcrypt.hashSync("quidditch"), firstName: "Elizabeth", lastName: "Lemon", profession:"Student", bio:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."} 
]
let exportedMethods= {
	checkForUser(username,password) {
		//console.log("atleast it checks"+" username: "+username+", password: "+ password);
		return new Promise((fulfill,reject)=>{
			if(!username||!password)
				reject("invalid username or password");	

			for (var i = users.length - 1; i >= 0; i--) {
				//console.log(bcrypt.compareSync(password, users[i].hashedPassword));
				//console.log(password+" :"+ users[i].hashedPassword);
				if(users[i].username==username && bcrypt.compareSync(password, users[i].hashedPassword))
					fulfill(users[i]);
			}
			reject("Invalid username or password");
		});
	},
	returnUser(username) {
		for (var i = users.length - 1; i >= 0; i--) {
			if(users[i].username==username)
				return users[i];
		}
	}
}
module.exports=exportedMethods;