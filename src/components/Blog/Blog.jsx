import React, { useContext } from 'react';
import html2pdf from 'html2pdf.js';
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from '../pages/Loader/Spinner';

// Here write the some questions answer and implement the pdf to download

const Blog = () => {
	const { loading } = useContext(AuthContext);
	const generatePDF = () => {
		const element = document.getElementById('pdf-element');
		html2pdf().from(element).save('blog-document.pdf');
	};
	return (
		<div>
			{loading ? (
				<Spinner></Spinner>
			) : (
				<div className='pt-28 '>
					<div className='flex justify-center'>
						<button
							className='btn btn-warning font-bold my-8 text-center'
							onClick={generatePDF}>
							<span className='mr-2'>DOWNLOAD PDF</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
								/>
							</svg>
						</button>
					</div>
					<div id='pdf-element'>
						<section className='dark:bg-gray-800 dark:text-gray-100 '>
							<div className='container flex flex-col justify-center p-4  md:p-8'>
								<h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>
									Some Relevant questions from react
								</h2>
								<div className='grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 bottom-0'>
									<div>
										<h3 className='font-bold text-lg'>
											1.Tell us the differences between uncontrolled and
											controlled components.
										</h3>
										<p className='mt-1 dark:text-gray-400 text-justify'>
											Uncontrolled Components: An uncontrolled component is a
											form element (like an input or textarea) that does not
											have its value controlled by React. Instead, the value is
											set by the user and read from the DOM using a ref. The
											advantage of uncontrolled components is that they are
											simpler to write since you don't have to manage the state
											of the input yourself. Controlled Components: A controlled
											component is a form element that is completely controlled
											by React. This means that React is responsible for
											managing the state of the input and updating it when the
											user types. Controlled components are often used when you
											need to enforce input validation or when you want to
											synchronize multiple inputs.
										</p>
									</div>
									<div>
										<h3 className='font-bold text-lg'>
											2.How to validate React props using PropTypes ?
										</h3>
										<p className='mt-1 dark:text-gray-400 text-justify'>
											PropTypes is a typechecking library built into React that
											allows you to validate the props that are passed into your
											components. This is important for ensuring that your
											components are used correctly and that errors are caught
											early in the development process. Here's how you can use
											PropTypes to validate your React props: <br /> 1.Install
											PropTypes: PropTypes is included in the React package, so
											you don't need to install it separately. You can simply
											import it from the 'prop-types' package. <br />
											2.Define PropTypes for your component: You can define
											PropTypes for your component by creating a static
											propTypes object on your component class. The keys of this
											object should be the names of the props you want to
											validate, and the values should be the PropTypes that you
											want to validate against. <br />
											3.Pass props to your component: Once you've defined your
											PropTypes, you can pass props to your component as usual.
											If a prop is passed that doesn't match its defined
											PropTypes, a warning will be printed to the console.
										</p>
									</div>
									<div className='top-0'>
										<h3 className='font-bold text-lg'>
											3.Tell us the difference between nodejs and express js.
										</h3>
										<p className='mt-1 dark:text-gray-400 text-justify'>
											Node.js and Express.js are both widely used technologies
											in web development, but they serve different purposes.
											Node.js is a runtime environment that allows developers to
											run JavaScript code outside of the browser, while
											Express.js is a web application framework built on top of
											Node.js. Node.js and Express.js serve different purposes.
											Node.js is a runtime environment that allows developers to
											run JavaScript code on the server-side, while Express.js
											is a web application framework built on top of Node.js
											that provides additional features and abstractions to make
											it easier to build web applications.
										</p>
									</div>
									<div>
										<h3 className='font-bold text-lg'>
											4.What is a custom hook, and why will you create a custom
											hook?
										</h3>
										<p className='mt-1 dark:text-gray-400 text-justify'>
											A custom hook is a reusable function in React that
											encapsulates a specific piece of logic and allows you to
											share it across multiple components. Custom hooks allow
											you to extract complex logic from your components, making
											them simpler and more focused on their core
											responsibilities. Custom hooks follow a specific naming
											convention, starting with the word "use", and can use
											other hooks, including other custom hooks, within their
											implementation.Custom hooks allow you to extract complex
											logic from your components and reuse it across multiple
											components. This can save you time and help you write more
											maintainable code.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			)}
		</div>
	);
};

export default Blog;
