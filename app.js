// 宣言後の記述ミスをエラーとして表示してくれる機能を呼び出す
"use strict";
// process.argv はNode.jsが提供しているコマンドラインの引数が入った配列
// [0]=nodeコマンドのファイルパス [1]=実行プログラムのパス [2]=引数
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
