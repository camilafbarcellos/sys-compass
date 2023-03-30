export const checkEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
/*
    matches any email address that includes a local part that can contain letters, 
    digits, periods, underscores, or hyphens, followed by an @ symbol, a domain
    name that can contain letters, digits, periods, or hyphens, and ending with 
    a TLD that consists of a single letter
*/

export const checkPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");
/*
    matches any password that has a minimum of 8 characters, at least one 
    alphabetic character (lowercase or uppercase) and at least one numeric 
    character
*/

export const checkName = new RegExp(
    "^[a-zA-Z\\xC0-\\uFFFF]+([ \\-']{0,1}[a-zA-Z\\xC0-\\uFFFF]+){0,2}[.]{0,1}$"
);
/*
    matches one or more letters, including accented characters, at the beginning 
    of the name;
    matches up to two additional parts of the name, each starting with zero or 
    one space, hyphen or apostrophe, followed by one or more letters, 
    including accented characters

    reference: https://a-tokyo.medium.com/first-and-last-name-validation-for-forms-and-databases-d3edf29ad29d
*/

export const checkUsername = new RegExp("^[a-zA-Z.0-9]{6,}$");
/*
    matches any string that is at least 6 characters long and 
    contains only letters, numbers, and dots
*/