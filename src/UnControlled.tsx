import { useEffect, useRef } from "react";

export const UnControlled = () => {
	const formRef = useRef<HTMLFormElement>(null);

	// フォームとして成立させるために書いた
	// パフォーマンス比較としては不要
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const inputValue = (formRef.current?.elements[0] as HTMLInputElement).value;
		console.log(inputValue);
	};

	// レンダリングされた時に呼ばれる
	useEffect(() => {
		console.log("非制御コンポーネントがレンダリングされました");
	});

	return (
		<form ref={formRef} onSubmit={onSubmit}>
			{Array.from({ length: 50 }).map((_, index) => (
				<div key={index}>
					<input type="text" name="name" />
				</div>
			))}
			<input type="submit" />
		</form>
	);
};
