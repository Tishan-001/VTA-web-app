import Header from '../../components/Navbar.jsx';
import Footer from "components/Footer";
import backgroundImage from "../../assets/images/aboutus.jpg"; // Replace with the actual path to your image


export default function AboutUs(){
    return(
        <>
        <Header />
        <div className="bg-bg1-20 mb-[-100px]">
            <div className="text-8xl text-center pt-[200px] pb-[200px]">
                About us
            </div>
            <div className="bg-blue-600 flex flex-row" >
                <div className="text-white-A700 text-5xl ml-[200px] pt-[100px]">OUR VISION</div>
                <div className="text-white-A700 text-2xl ml-[240px] pt-[100px] w-[1000px] text-justify pb-[100px]">
                To become the premier global travel platform, transforming how people experience travel by offering a seamless, comprehensive, and personalized journey. We strive to make every adventure accessible, enjoyable, and stress-free by integrating cutting-edge technology with a wide range of travel services including planning, transportation, accommodation, and medical assistance.
                </div>
            </div>
            <div className="relative flex flex-row w-full h-auto">
            <div
                    className="absolute inset-0 z-0"
                    style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent black overlay
                        // You can use any RGBA color here for different colors and opacity levels
                    }}
                    ></div>
                </div>
                <div className="relative z-10 flex flex-row w-full">
                    <div className="text-white text-5xl ml-[200px] pt-[100px] text-white-A700_01">OUR MISSION</div>
                    <div className="text-white text-2xl ml-[200px] pt-[100px] w-[1000px] text-justify pb-[100px] text-white-A700_01">
                    Our mission is to revolutionize the travel experience by creating an all-encompassing platform that addresses every aspect of a traveler’s journey. From the initial stages of planning to the final moments of their adventure, we are committed to providing seamless, intuitive, and comprehensive services. We aim to offer personalized travel plans that cater to the unique needs and preferences of each traveler, ensuring that every trip is meticulously tailored to deliver maximum enjoyment and minimum hassle. By partnering with top-rated transportation providers and accommodations, we guarantee reliable and comfortable travel and stays.
                    <br /><br />
                    We are dedicated to excellence in customer service, continuously enhancing our platform with cutting-edge technology to offer real-time support and innovative solutions. Our mission extends beyond mere convenience; we are passionate about promoting sustainable and responsible travel practices to protect the environment and support local communities. We strive to educate our users on the importance of sustainable travel and to offer eco-friendly options whenever possible. By fostering a culture of respect, care, and curiosity, we aim to inspire travelers to explore the world responsibly, leaving a positive impact on the places they visit.
                    <br /><br />
                    </div>
                </div>
            </div>
            <div className="bg-white-A700_01 flex flex-row" >
                <div className="text-blue-500 text-5xl ml-[200px] pt-[100px]">OUR VALUES</div>
                <div className="text-black-900 text-2xl ml-[220px] pt-[100px] w-[1000px] text-justify pb-[100px]">
                    - Prioritizing customer needs and exceeding expectations.<br/>
                    - Embracing technology for continuous improvement.<br/>
                    - Conducting business with honesty and transparency.<br/>
                    - Customer-Ensuring reliability, safety, and comfort.<br/>
                    - Promoting responsible travel practices.<br/>
                    - Customer-Fostering teamwork for effective service.<br/>
                    - Encouraging employee growth and innovation.<br/>
                </div>
            </div>
        </div>
        
        
        <Footer />
        </>
    )
}