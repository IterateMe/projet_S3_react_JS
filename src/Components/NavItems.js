export function goToSignUp(){
    let currentPath = window.location.href;
    let goToPath = currentPath+"inscription";
    window.location.assign(goToPath);
}

export function goToSignIn(){
    let goToPath = "/";
    window.location.assign(goToPath);
}

export function goToMainMenu(){
    let goToPath = "/main-menu";
    window.location.assign(goToPath);
}

export function goToMentorSignUp(){
    let goToPath = "/mentor-signup";
    window.location.assign(goToPath);
}

export function goToStudentSignUp(){
    let goToPath = "/student-signup";
    window.location.assign(goToPath);
}