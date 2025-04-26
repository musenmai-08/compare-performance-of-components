import { useEffect, useState } from "react";

export const Controlled = () => {
	const [formData, setFormData] = useState(
		Array(50)
			.fill("")
			.map(() => ({ name: "" }))
	);
	const handleFormDataChange = (formData: { name: string }[]) => {
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
