// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 允许箭头函数不使用圆括号
    'arrow-parens': 0,
    // 禁止出现多个空行
    'no-multiple-empty-lines': [2, {'max': 1, 'maxEOF': 2}],
    // 统一逗号周围空格风格
    'comma-spacing': [2, {'before': false, 'after': true}],
    // 采用one true brace style大括号风格
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // 约束for-in使用hasOwnProperty判断
    'guard-for-in': 2,
    // 强制单行代码使用空格
    'block-spacing': [2, 'always'],
    // 强制点号与属性同一行
    'dot-location': [2, 'property'],
    // 确保运算符周围有空格
    'space-infix-ops': 2,
    // 不允许圆括号中出现空格
    'space-in-parens': [2, 'never'],
    // 立即执行函数风格
    'wrap-iife': [2, 'inside'],
    // 不允许重复声明变量
    'no-redeclare': [2, {builtinGlobals: true}],
    // if语句包含一个return语句， else就多余
    'no-else-return': 2,
    // 对象字面量的键值空格风格
    'key-spacing': 2,
    // 不允许出现多个空格
    'no-multi-spaces': 2,
    // 不允许使用var变量
    'no-var': 2,
    // 单行可忽略大括号，多行不可忽略
    'curly': [2, 'multi-line'],
    // 开发模式允许使用console
    'no-console': 0,
    // 不限制变量一起声明
    'one-var': 0,
    // 不要求块内空格填充格式
    'padded-blocks': 0,
    // 函数圆括号之前没有空格
    'space-before-function-paren': [2, "never"],
    // 允许使用tab
    'no-tabs': 0,
    // 缩进使用不做限制
    'indent': 0,
    // 允许使用==
    'eqeqeq': 0,
    // 允许使用分号
    'semi': [0, 'never'],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
