const IS_LOCAL = window.location.protocol === 'file:';

const PATHS = {
    assets: IS_LOCAL ? '../assets/' : '/my-project/assets/',
    js:     IS_LOCAL ? '../js/'     : '/my-project/js/',
    img:    IS_LOCAL ? '../assets/images/' : '/my-project/assets/images/'
};