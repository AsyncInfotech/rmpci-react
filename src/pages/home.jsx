import Image1 from '../assets/images/gallery_image.webp';
import Image2 from '../assets/images/gallery_image2.webp';
import Image3 from '../assets/images/gallery_image3.webp';
import Imageman from '../assets/images/img_man.png';

export const Home= ()=> {
  return (
     <>
            {/* Announcement Section */}
            <div className="container mt-3">
                <div className="announcement">
                    <p>
                        <strong>Latest Updates:</strong>{" "}
                        <span className="text-danger">
                            We will share latest update here: 22 June 2025, 05:00 PM
                        </span>
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="gallery row mt-4 g-3">
                    <div className="col-12 col-sm-6 col-md-4">
                        <img src={Image1} alt="Gallery Image" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <img src={Image2} alt="Gallery Image" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <img src={Image3} alt="Gallery Image" />
                    </div>
                </div>
            </div>

            {/* Chairman’s Desk Section */}
            <div className="about-section mt-4">
                <h4 className="text-center text-danger">Chairman’s Desk</h4>
                <p className="text-center">
                    The name of this organization implies a focus on improving healthcare in rural areas by supporting and developing the skill of Rural practitioners.
                </p>
                <p className="text-center">
                    <b>(RURAL MEDICAL PRACTITIONER COUNCIL OF INDIA)</b>
                </p>
                <p className="text-center">
                    This organization is formed in view of the development and improvement of rural MEDICAL practitioners.
                    RURAL MEDICAL PRACTITIONER COUNCIL OF INDIA ( RMPCI) IS a Govt Registered organisation under the provision of SR act 1982 (Govt of India) and regd. No is –- IV-2003-00065/2022 (Under Trust act 1882 GOVT OF INDIA)
                </p>
            </div>

            {/* Officials Section */}
            <div className="container">
                <div className="row officials text-center">
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="official-card">
                            <img src={Imageman} alt="Official Image" />
                            <h5>J C BISWAS (Social activist)</h5>
                            <p>PRESIDENT</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="official-card">
                            <img src={Imageman} alt="Official Image" />
                            <h5>Dr B BHATTACHARJEE</h5>
                            <p>Registrar</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3">
                        <div className="official-card">
                            <img src={Imageman} alt="Official Image" />
                            <h5>Dr Ananda mohon Bhowmik</h5>
                            <p>SECRETARY</p>
                        </div>
                    </div>

                    {/* Uncomment if needed
                    <div className="col-md-4 col-sm-6 mb-3"> ... </div>
                    */}
                </div>

                {/* Legal Version Section */}
                <div className="about-section mt-4">
                    <h4 className="text-center text-danger">Legal version</h4>
                    <p className="text-center">
                        According to the article 19(1) g of Indian constitution we have the freedom to provide, protect, and research training courses, in the bona fide field of alternative medicine. Additionally under article 30, we have the right to establish and operate educational institutions of our choice.
                    </p>
                </div>

                {/* Motto Section */}
                <div className="about-section mt-4">
                    <h4 className="text-center text-danger">MOTTO OF THE COUNCIL</h4>
                    <p className="text-center">
                        <b>CHEMICAL MEDICINE FREE LIFE AND NATURE CURE LIVING</b>
                    </p>
                </div>

                {/* Function Section */}
                <div className="about-section mt-4">
                    <h4 className="text-center text-danger">Function of the Council:</h4>
                    <p className="text-center">Standardise practitioners' medical education and upgrade their medical knowledge to benefit social health.</p>
                    <p className="text-center">Arrange minimum recognition to the practitioners with practical training from reputed and Govt. Regd. organizations.</p>
                    <p className="text-center">Organize rural practitioners under one umbrella to solve their issues and ensure smooth functioning of the system.</p>
                    <p className="text-center">Provide moral and technical support to practitioners for better future performance.</p>
                    <p className="text-center">Maintain a directory and testimonials for public queries.</p>
                    <p className="text-center">Make practitioners aware of the limitations of their practice.</p>
                    <p className="text-center">Arrange new teams or manpower in the healthcare sector for social development.</p>
                    <p className="text-center">Set up village-wise AYUSH health units in alternative medicine.</p>
                    <p className="text-center">Provide indirect support to the healthcare industry for a healthy life.</p>
                    <p className="text-center">Door-to-door campaign for AYUSH medicine usage in every aspect of life.</p>
                </div>
            </div>
        </>
  );
}

export default Home;
