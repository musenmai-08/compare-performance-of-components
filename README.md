制御コンポーネントと非制御コンポーネントのパフォーマンスの違いを確認するコードです。

### 制御コンポーネント

コンソールに「制御コンポーネントがレンダリングされました」と出力されます。
また、フォームの内容が変更されると、上記のメッセージに加えて、レンダリングにかかった時間も出力されます。
制御コンポーネントでは、フォームの値が変更されるたびに、コンソールに表示された時間がかかるということです。

### 非制御コンポーネント

初回レンダリング時には「非制御コンポーネントがレンダリングされました」と出力されます。
制御コンポーネントと違い、フォームの値を変更しても上記のメッセージが表示されません。つまり、非制御コンポーネントでは、フォームの値を変更してもコンポーネントの再レンダリングが起きないということです。
制御コンポーネントではフォームの値を変更するたびに再レンダリングが起きていたので、これと比較すると、非制御コンポーネントはパフォーマンスに優れていると言えます。
