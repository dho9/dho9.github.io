const id = document.querySelector('#userId');
const pw = document.querySelector('#pwd');
const pwdCheck = document.querySelector('#pwdCheck');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const tel1 = document.querySelector('#tel1');
const tel2 = document.querySelector('#tel2');
const tel3 = document.querySelector('#tel3');

const errId = document.querySelector('#errId');
const errPw = document.querySelector('#errPw');
const errpwdCheck = document.querySelector('#errpwdCheck');
const errName = document.querySelector('#errName');
const errEmail = document.querySelector('#errEmail');
const errphone = document.querySelector('#errphone');



document.memberFrm.onsubmit = function (e) {
    if (!validationsId(id.value)) { 
        e.preventDefault();
        id.value="";
        return;
    }
    if (!validationsPw(pw.value)) { 
        e.preventDefault();
        pw.value="";
        return;
    }
    if (pw.value != pwdCheck.value) {
        errpwdCheck.innerHTML = '비밀번호가 일치하지 않습니다.';
        errpwdCheck.style.display = 'inline';
        e.preventDefault();
        pwdCheck.value="";
        return;
    }
    if (!validationsName(userName.value)) { 
        e.preventDefault();
        userName.value="";
        return;
    }
    if (!validationsEmail(email.value)) { 
        e.preventDefault();
        email.value="";
        return;
    }
    if (!validationstel1(tel1.value)) { 
        e.preventDefault();
        tel1.value="";
        return;
    }
    if (!validationstel2(tel2.value)) { 
        e.preventDefault();
        
        tel2.value ="";
        return;
    }
    if (!validationstel3(tel3.value)) { 
        e.preventDefault();
        
        tel3.value ="";
        return;
    }

    // 모든 유효성 검사를 통과했을 때
    alert('회원가입 성공!');
    location.reload();

}



function validationstel3(tel3) {
    const validationstel3 = [
        { reTel: /\d{4,}/, msg: '마지막번호는4자리이상 입력해주세요' }
    ];
    for (const { reTel, msg } of validationstel3) {
        if (!reTel.test(tel3)) {
            errphone.innerHTML = msg;
            errphone.style.display = 'inline';
            return false;
        }
    }
    return true;
}
function validationstel2(tel2) {
    const validationstel2 = [
        { reTel: /\d{3,}/, msg: '가운데번호를3자리이상입력해주세요' }
    ];
    for (const { reTel, msg } of validationstel2) {
        if (!reTel.test(tel2)) {
            errphone.innerHTML = msg;
            errphone.style.display = 'inline';
            return false;
        }
    }
    return true;
}
function validationstel1(tel1) {
    const validationstel1 = [
    { reTel: /\d{2,}/, msg: '지역번호 /010 을 숫자로 입력해주세요' }
    ];
    for (const { reTel, msg } of validationstel1) {
        if (!reTel.test(tel1)) {
            errphone.innerHTML = msg;
            errphone.style.display = 'inline';
            return false;
        }
    }
    return true;
}

function validationsEmail(email) {
    const validationsEmail = [
        { reEmail: /[\w]{4,12}@/, msg: '@앞 아이디는 4~12글자입니다.' },
        { reEmail: /[\w]{4,12}@[\w]+\.[\w]+/, msg: '이메일 형식에 맞지않습니다. @, .com.. 확인해주세요' },
    ];
    for (const { reEmail, msg } of validationsEmail) {
        if (!reEmail.test(email)) {
            errEmail.innerHTML = msg;
            errEmail.style.display = 'inline';
            return false;
        }
    }
    return true;
}



function validationsName(userName) {
    const validationsName = [
        { reName: /^.{2,}$/, msg: '이름은 두 글자 이상이어야 합니다.' },
        { reName: /[가-힣]/, msg: '이름을 한글로 정확히 입력해주세요.' }
    ];
    for (const { reName, msg } of validationsName) {
        if (!reName.test(userName)) {
            errName.innerHTML = msg;
            errName.style.display = 'inline';
            return false;
        }
    }
    return true;
}

function validationsId(id) {
    const validationsId = [
        { reId: /^.{4,12}$/, msg: '아이디는 4~12자리여야 합니다.' },
        { reId: /^[a-z]/, msg: '아이디의 시작은 영소문자이여야 합니다.' },
        { reId: /\d/, msg: '아이디는 숫자 하나이상 포함해야합니다.' },
    ];
    for (const { reId, msg } of validationsId) {
        if (!reId.test(id)) {
            errId.innerHTML = msg;
            errId.style.display = 'inline';
            return false;
        }
    }
    return true;
}

function validationsPw(pw) {
    const validationsPw = [
        { rePw: /^.{8,15}$/, msg: '비밀번호는 8~15자리여야 합니다.' },
        { rePw: /\d/, msg: '비밀번호는 숫자를 하나이상 포함해야합니다.' },
        { rePw: /[a-z]/i, msg: '비밀번호는 영문자를 하나이상 포함해야합니다.' },
        { rePw: /[(*!&]/, msg: '비밀번호는 특수문자((*!&)를 하나이상 포함해야합니다.' }
    ];
    for (const { rePw, msg } of validationsPw) {
        if (!rePw.test(pw)) {
            errPw.innerHTML = msg;
            errPw.style.display = 'inline';
            return false;
        }
    }
    return true;
};


id.onblur = () => errId.style.display = 'none';
pw.onblur = () => errPw.style.display = 'none';
pwdCheck.onblur = () => errpwdCheck.style.display = 'none';
userName.onblur = () => errName.style.display = 'none';
email.onblur = () => errEmail.style.display = 'none';
tel1.onblur = () => errphone.style.display = 'none';
tel2.onblur = () => errphone.style.display = 'none';
tel3.onblur = () => errphone.style.display = 'none';

const saveMember = () => {


const frm = document.memberFrm;
  const userId = frm.userId;
  const pwd = frm.pwd;
  const userName = frm.userName;
  const email = frm.email;
  const tel1 = frm.tel1;
  const tel2 = frm.tel2;
  const tel3 = frm.tel3;
  const job = frm.job;
  const route = frm.route;

const member = new Member(userId.value, pwd.value,userName.value,email.value,tel1.value,tel2.value,tel3.value,job.value,route.value,);

const members = JSON.parse(localStorage.getItem('members')) || [];
members.push(member);
const memberStr = JSON.stringify(members);
localStorage.setItem("members", memberStr);

console.log(member.toString());


};
class Member {
constructor (userId, pwd,userName, email,tel1,tel2,tel3,job,route) {
  this.userId = userId;
  this.pwd = pwd;
  this.userName = userName;
  this.email = email;
  this.tel1 = tel1;
  this.tel2 = tel2;
  this.tel3 = tel3;
  this.job = job;
  this.route = route;
}
toString () {
  return `회원정보(아이디 = ${this.userId}, 비밀번호 = ${this.pwd}, 이름 = ${this.userName}), 이메일 = ${this.email}, 전화번호 = ${this.tel1+this.tel2+this.tel3}, 직업 = ${this.job}, 유입경로 = ${this.route}`;
}
}



const modalBtn = document.getElementById("modal_btn");
const modalWrap = document.getElementsByClassName("modal_wrap")[0];
const blackBg = document.getElementsByClassName("black_bg")[0];

function showModal() {
  modalWrap.style.display = "block";
 
}

function closeModal() {
  modalWrap.style.display = "none";
}

modalBtn.addEventListener("click", function () {
  showModal();
});

function modal_Close() {
  closeModal();
}
window.onload=()=>{
  loadMembers();
}


const loadMembers = () => {
    const tbody = document.querySelector("table#memberList tbody");
    const memberList = JSON.parse(localStorage.getItem('members'));
  
    // guestbook -> tr -> tbody
    tbody.innerHTML = memberList.reduce((html, { userId, userName, email, tel1, tel2, tel3, job, route }) => {
      const tr = `
      <tr>
        <td>${userId}</td>
        <td>${userName}</td>
        <td>${email}</td>
        <td>${tel1 + tel2 + tel3}</td>
        <td>${job}</td>
        <td>${route}</td>
      </tr>
      `;
      return html + tr;
    }, "");
  };
  