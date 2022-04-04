import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='context-api'>
                <h1>What is context API</h1>
                <p>
                    1.prop ড্রিলিং পদ্দতিতে প্যারেন্ট থেকে চিলড্রেন এ ডাটা পাঠানোর অসুবিধা থেকে মুক্তির জন্য
                    কনটেক্সট  API ব্যবহার করা হয় | <br />
                    2.কনটেক্সট API  প্রাথমিকভাবে ব্যবহৃত হয় যখন কিছু ডেটা বিভিন্ন নেস্টিং স্তরে অনেক উপাদান দ্বারা
                    অ্যাক্সেসযোগ্য হওয়ার  প্রয়োজন। <br />
                    3.কনটেক্সট এপিআই হল একটি বিল্ট-ইন রিঅ্যাক্ট টুল যা চূড়ান্ত বান্ডেল এর  আকারকে প্রভাবিত করে না
                    এবং ডিজাইনের মাধ্যমে একত্রিত করা হয়।<br />

                    4.ব্যবহার এর নিয়ম :
                    <li> Use createContext() to create the Context</li>
                    <li>Pull the Provider out of Context created from createContext()</li>
                    <li>Wrap your Parent component with the Provider</li>
                    <li>Consume the context with useContext() hooks  </li>




                </p>
            </div>
            <div className='context-api'>
                <h1>What is semantic tag</h1>
                <p>
                    1.HTML5  এ সবচেয়ে গুরুত্বপূর্ণ পরিবর্তন হলো simantic  | | <br />
                    2.simantic  HTML  সিনট্যাক্সকে বোঝায় যা ওয়েব পৃষ্ঠাগুলির বিভিন্ন অংশ গুলোকে
                    ভালভাবে বুজতে পারে যার মাধ্যমে  এইচটিএমএলকে আরও বোধগম্য করে তোলে। <br />
                    3.এটি ওয়েব পৃষ্ঠাগুলিকে আরও তথ্যপূর্ণ এবং অভিযোজনযোগ্য করে তোলে |<br />
                    4.মেশিন লার্নিং এ ওয়েব পেজ গুলোকে আরো ভালো ভাবে পড়তে ও ব্রাউজার এবং সার্চ ইঞ্জিনগুলিকে
                    বিষয়বস্তুকে আরও ভালভাবে ব্যাখ্যা করতে পারে |<br />
                    5. Some Semantic Tags : (abbr,acronym,blockquote,div,span)
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blogs;