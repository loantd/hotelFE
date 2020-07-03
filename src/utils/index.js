export function cx(...classNames) {
  let classString = "";
  for (let i = 0; i < classNames.length; i++) {
    let clazzName = classNames[i];
    if (clazzName && clazzName instanceof Object) {
      clazzName = cxObject(clazzName);
    }

    if (clazzName) {
      classString = classString.concat(" ").concat(clazzName);
    }
  }
  return classString.trimLeft();
}

function cxObject(classNames) {
  let classString = "";
  for (let clazzName in classNames) {
    if (classNames.hasOwnProperty(clazzName) && classNames[clazzName]) {
      classString = classString.concat(" ").concat(clazzName);
    }
  }

  return classString.trimLeft();
}

export const emailRules = [
  { required: true, message: "Vui lòng nhập email" },
  { type: "email", message: "Vui lòng nhập email đúng định dạng" },
];
export const nameRules = [{ required: true, message: "Vui lòng nhập họ tên" }];
