import React from 'react';
import { Heading, Inputs, Paragraph } from '../shared';
import formimg from '../../assets/images/form-tickets.png';
import { feeCoverage, initialContent, inputContent } from '../../data/formInformation';

const FormContainer = () => {
	return (
		<div className='text-white bg-black flex flex-row justify-between' style={{ border: '1px solid aqua' }}>
			<div id='info' className='w-[45%] m-8 p-2' style={{ border: '1px solid red' }}>
				{initialContent.map((item, index) =>
					index == 0 ? (
						<Paragraph variant='body3' key={index}>
							{item}
						</Paragraph>
					) : (
						<Paragraph variant='body3' className='text-primary' key={index}>
							{item}
						</Paragraph>
					)
				)}
				<div id='imgContainer' className='mx-auto my-8 w-[408px]'>
					<img src={formimg} height={'100%'} width={'100%'} alt='ticket-price' />
				</div>
				<Paragraph variant='body3'>
					Alumni donating/contributing more than ₹50,000 can pay &quot;Individual Only (without family)&quot; registration
					fee for their family registration and they do not need to pay &quot;With Family (spouse + kids)&quot; registration
					fee.
				</Paragraph>

				<Heading
					variant='h3'
					className='text-primary-yellow shadow-subheading mt-10'
					style={{ textShadow: '1px 1px 0px 0px #F9F9F9' }}>
					The Registration fee covers the following
				</Heading>

				<ul className='list-disc mx-3 my-5'>
					{feeCoverage.map((item, index) => (
						<li key={index}>
							<Paragraph variant='body3' key={index}>
								{item}
							</Paragraph>
						</li>
					))}
				</ul>

				<Paragraph variant='body2' className='text-primary my-2'>
					The fee does not include accommodation.
				</Paragraph>
			</div>

			<div id='form' className='w-[55%] m-8 p-2' style={{ border: '1px solid red' }}>
				{inputContent.map((item, index) => (
					<React.Fragment key={index}>
						<Paragraph
							variant='body2'
							htmlFor={item.id}
							className='inline shadow-white px-2'
							style={{ boxShadow: '1px 1px 0px 0px #FF7342' }}>
							{item.label}
						</Paragraph>{' '}
						<br />
						{Array.isArray(item.id) ? (
							item.id.map((id, idx) => (
								<Inputs className='inline mr-3 w-[30%]' id={id} placeholder={item.placeholder[idx]} key={idx} />
							))
						) : (
							<Inputs className='block w-[90%]' id={item.id} placeholder={item.placeholder} />
						)}
					</React.Fragment>
				))}

				<textarea
					className='outline-none	bg-inherit rounded-md my-3 mb-6 w-[90%] h-[8vw] text-[#B0B0B0] p-2 block'
					style={{ border: '1px solid #FF7647', boxShadow: '2px 2px 0px 0px #F9F9F9' }}
					placeholder='Registration Type'
				/>

				<Heading className='text-primary' variant='h1'>
					Form Container
				</Heading>
				<Paragraph variant='body3'>This is the form container</Paragraph>
				<div>FormContainer</div>
			</div>
		</div>
	);
};

export default FormContainer;