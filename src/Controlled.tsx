import { useEffect, useRef, useState } from "react";

export const Controlled = () => {
	// レンダリング時間計測用
	const startTimeRef = useRef<number>(0);

	const [formData, setFormData] = useState(
		Array(50)
			.fill("")
			.map(() => ({ name: "" }))
	);
	const handleFormDataChange = (formData: { name: string }[]) => {
		startTimeRef.current = performance.now();
		setFormData(formData);
	};

	// フォームとして成立させるために書いた
	// パフォーマンス比較としては不要
	const handleChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		const updatedFormData = [...formData];
		updatedFormData[index] = { ...updatedFormData[index], [name]: value };
		handleFormDataChange(updatedFormData);
	};

	// フォームとして成立させるために書いた
	// パフォーマンス比較としては不要
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	// レンダリングされた時に呼ばれる
	useEffect(() => {
		console.log("制御コンポーネントがレンダリングされました");
	});

	// レンダリング時間計測用
	useEffect(() => {
		if (startTimeRef.current) {
			console.log(
				`制御コンポーネントのレンダリング時間: ${
					(performance.now() - startTimeRef.current) / 1000
				}秒`
			);
		}
		startTimeRef.current = 0;
	});

	return (
		<form onSubmit={onSubmit}>
			{formData.map((data, index) => (
				<div key={index}>
					<input
						name="name"
						value={data.name}
						onChange={(e) => handleChange(index, e)}
					/>
				</div>
			))}
			<input type="submit" />
		</form>
	);
};
