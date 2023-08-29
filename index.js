const fs = require('fs');
require('date-utils');
const { execSync } = require('child_process');
const scloudjs = require("scloudjs"); //scloudjsをモジュールとして使えるようにする
let clouddatas = new Object();//このオブジェクトにクラウド変数のデータが入る

const main = (data) => {//メッセージを受け取ったときにどんな処理をするかを設定する
	const temp = scloudjs.parsedata(data, clouddatas);//受け取ったメッセージを整理する
	clouddatas = temp.clouddatas;//クラウド変数のデータ
	const changedlists = temp.changedlists;//変更された変数一覧

	fs.writeFileSync('./dat.txt', clouddatas["ab"].value);

	execSync('git add .');
	execSync('git commit -m "test"');
	execSync('git push');
};

scloudjs.setdatas("sakamotor", process.env.pass, "887014703", main);//いろいろデータを設定する

const func = async () => {//実行

	await scloudjs.login();//scratchにログイン
	await scloudjs.connect();//scratchのクラウド変数サーバーに接続
	await scloudjs.handshake();//プロジェクトに接続
};
func();

