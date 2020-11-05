# WebSocket(Sokcket.io)を使った簡易チャット
ローカルWebサーバーを立ちあげ、複数のクライアント間でリアルタイムでのチャットを行う。ローカルWebサーバの作成にはexpressを、WebSocketでの非同期双方向通信にはSocket.ioを使用した。

# モジュールのインストール
package.jsonを付けたので、そのディレクトリで

```
$ npm install
```

で完了、なはず。

# 使用方法
以下のコマンドを実行。

```
$ node app
```

以下のような表示になるとサーバが立ち上がっている状態。
```
$ node app
server listenning. Port: 8000
```

Ctrl + C　で中断する(閉じる)ことができる。
サーバが立ち上がっている状態で、
http://localhost:8000
を開くとユーザー名とメッセージの入力テキストボックスとsendボタンだけの簡素なページが出てくる。
ユーザ名とメッセージを入力しsendボタンを押してチャットができる。
複数窓でページを開いて、そのうちの一つのページでメッセージを送るとすべてのページでメッセージが表示されることが確認できる。メッセージはコンソールにも表示される。

# 参考
[Node.jsとExpressでローカルサーバーを構築する(2) ―Expressでルーティング―
](https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c)

[Node.js + Express + Socket.ioで簡易チャットを作ってみる](https://qiita.com/riku-shiru/items/ffba3448f3aff152b6c1)


