function downloadPdf() {
  if (JSON.parse(experiences).length >= 2) {
    let expDiv = document.getElementById("expid2").offsetTop;
    if (expDiv > 348) {
      let el = document.getElementById("expid2");
      el.className = "break_xp2";
    }
  }

  if (JSON.parse(experiences).length >= 4) {
    let expDiv4 = document.getElementById("expid4").offsetTop;
    if (expDiv4 > 1050) {
      let element = document.getElementById("expid4");
      element.className = "break_xp2";
    }
  }

  if (JSON.parse(experiences).length >= 6) {
    let expDiv6 = document.getElementById("expid6").offsetTop;
    if (expDiv6 > 1850) {
      let element = document.getElementById("expid6");
      element.className = "break_xp2";
    }
  }

  let skillsHeight = document.getElementById("to_brake-hobbies").offsetTop;
  let languagesHeight =
    document.getElementById("to_brake-languages").clientHeight;

  if (skillsHeight > 300) {
    let el = document.getElementById("to_brake-hobbies");
    el.classList.add("break_xp2");
  }
  if (languagesHeight > 500) {
    let el = document.getElementById("to_brake-languages");
    el.classList.add("break_xp2");
  }
  let body = document.getElementById('content_body')

  print();
}
const queryString = window.location.search;
const queryImageString = window.location.search;

const urlImageParams = new URLSearchParams(queryImageString);
let img = document.createElement("img");
let credential = urlImageParams
  .get("X-Amz-Credential")
  ?.replaceAll("+", "%2B")
  ?.replaceAll("=/", "%3D%2F")
  ?.replaceAll("/", "%2F");
let date = urlImageParams.get("X-Amz-Date");
let expires = urlImageParams.get("X-Amz-Expires");
let amzSignature = urlImageParams.get("X-Amz-Signature");
let signedHeaders = urlImageParams.get("X-Amz-SignedHeaders");
let photo = urlImageParams.get("photo");

let withAspas = queryString
  .replaceAll("%22", '"')
  .replaceAll("%20", " ")
  .replaceAll("%C3%A7", "ç")
  .replaceAll("%C3%B5", "õ")
  .replaceAll("%C3%A7%C3%A3", "çã")
  .replaceAll("%C3%A7%C3%A3", "çã")
  .replaceAll("%C3%A3", "ã")
  .replaceAll("%C3%AD", "í")
  .replaceAll("%C3%A1", "á")
  .replaceAll("%C3%BA", "ú")
  .replaceAll("%C3%B3", "ó")
  .replaceAll("%C3%A9", "é")
  .replaceAll("%C3%AA", "ê")
  .replaceAll("%C3%A2", "ô")
  .replaceAll("%C3%B4", "ô")
  .replaceAll("%C2%B7", "·")
  .replaceAll(" & ", " e ");

const urlParams = new URLSearchParams(withAspas);
let fullName = urlParams.get("name") + " " + urlParams.get("last");
let country = urlParams.get("country");
let bio = urlParams.get("bio");
let otherRole = urlParams.get("otherrole");
let role = urlParams.get("role");
let email = urlParams.get("email");
let linkedin = urlParams.get("linkedin");
let specificsSkills = urlParams.get("specificskills").split(",");
let languages = urlParams.get("languages");
let skills = urlParams.get("skills");
let experiences = urlParams.get("experiences");
let policy = urlParams.get("Policy");
let signature = urlParams.get("Signature");
let keyPair = urlParams.get("Key-Pair-Id");
let educations = urlParams.get("educations");
let photoInDevelope = urlParams.get("photo");
let list = document.getElementById("list_specific");
let listLanguages = document.getElementById("list_languages");
let listSkills = document.getElementById("list_skills");
let listExperiences = document.getElementById("list_experiences");
let listEducations = document.getElementById("list_educations");
let photoId = document.getElementById("user_photo");

img.src = photo.includes("files")
  ? `https://budibase.rwinteractive.tech${photo}&X-Amz-Credential=${credential}&X-Amz-Date=${date}&X-Amz-Expires=${expires}&X-Amz-Signature=${amzSignature}&X-Amz-SignedHeaders=${signedHeaders}`
  : `${photoInDevelope}&Policy=${policy}&Signature=${signature}&Key-Pair-Id=${keyPair}`;

specificsSkills.forEach((el) => {
  if(specificsSkills.length === 1 && el === '') {
    document.getElementById('to_brake-spec').style.display = 'none'
  }
  let createSpecific = document.createElement("span");
  createSpecific.style.whiteSpace = "nowrap";
  createSpecific.innerText = el === "" ? "-" : el + ";";

  list.appendChild(createSpecific);
});

JSON.parse(experiences).forEach((el) => {
  let div = document.createElement("div");
  let title = document.createElement("h3");
  let company = document.createElement("p");
  let description = document.createElement("p");
  let date = document.createElement("p");

  title.innerText = el.title;
  title.style.margin = "0";
  title.style.paddingBottom = "5px";

  div.id = "expid" + el.id;

  company.innerText = el.company;
  company.style.margin = "0";

  description.innerText = el.description;
  description.style.margin = "0";
  description.style.textAlign = "justify";

  date.innerText = `${el.start_date} - ${el.end_date}`;
  date.style.margin = "0";
  date.style.paddingBottom = "10px";

  div.appendChild(title);
  div.appendChild(company);
  div.appendChild(date);
  div.appendChild(description);

  listExperiences.appendChild(div);
});

JSON.parse(educations).forEach((el) => {
  if(JSON.parse(educations).length === 1) {
    if(el.start_date === null && el.end_date === null) {
      document.getElementById('to_brake-educations').style.display = 'none'
      document.getElementById('break').style.display = 'none'
    }
  }
  let div = document.createElement("div");

  let degree = document.createElement("h3");
  let institution = document.createElement("p");
  let date = document.createElement("p");

  degree.innerText = el.degree;
  degree.style.margin = "0";

  institution.innerText = el.institution;
  institution.style.margin = "0";

  date.innerText = `${el.start_date} - ${el.current ? "Current" : el.end_date}`;
  date.style.margin = "0";

  date.id = "id" + el.id;

  div.appendChild(degree);
  div.appendChild(institution);
  div.appendChild(date);

  listEducations.appendChild(div);
});

JSON.parse(skills).forEach((el) => {
  let createSpecific = document.createElement("li");
  createSpecific.style.pageBreakAfter = "auto";
  createSpecific.innerText = el.skill;
  createSpecific.id = "idskill" + el.id;

  listSkills.appendChild(createSpecific);
});

JSON.parse(languages).forEach((el) => {
  let createSpecific = document.createElement("li");

  createSpecific.innerText = `${el.language} - ${el.level}`;

  listLanguages.appendChild(createSpecific);
});

img.style.borderRadius = "50%";
img.style.width = "100%";
img.style.height = "100%";
img.style.position = "absolute";
img.style.left = "0";
img.style.top = "0";

photoId.appendChild(img);

document.getElementById("name").innerText = fullName;
document.title = "Curriculo " + fullName;
document.getElementById("bio_profile").innerText = bio;
document.getElementById("role").innerText = role === "Other" ? otherRole : role;
const item = document.getElementById("content_body");
item.style.height = document.getElementById("get_height").clientHeight + `px`;
