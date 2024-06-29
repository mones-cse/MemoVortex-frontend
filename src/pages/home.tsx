import { useStore } from "../stores/useStore";

const Home = () => {
	const { count, setCount, grandFather, incChildAge } = useStore();
	return (
		<div>
			<h1>Home</h1>
			<p>Welcome to the home page</p>
			<br />
			<br />
			<p>Count is {count}</p>
			<button onClick={setCount} type="button">
				Increment
			</button>
			<br />
			<br />
			<p>GrandFather age is {grandFather.age}</p>
			<p>Father age is {grandFather.Father.age}</p>
			<p>Child age is {grandFather.Father.child.age}</p>
			<button onClick={() => incChildAge(10)} type="button">
				Increment Child Age to 10
			</button>
		</div>
	);
};

export default Home;
