const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
};

/*
Function validate. Check Input on RegExp provided in regExpDic by input data-required type
@param {htmlInputElement} el
@returns {Boolean} -Returns true if input valid or won't have data required attribute
*/

export function validate(el) {
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value)
}