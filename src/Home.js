import MonthLists from "./MonthLists";
import month1 from "./month2.jpg";
import month2 from "./month5.jpeg";
import culture1 from './festival1.jpg';
import culture2 from "./festival2.jpg"
import culture3 from "./festival3.jpg";



const Home = () => {
    return (
        <div className="container-fluid px-5 py-3 mb-3">

            <div className="row">
                <div className="col-md-7 order-md-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide" data-aos-once="true">
                    <div class="card rounded-4 border-0 shadow">
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">


                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            </div>


                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={month1} alt="" className="d-block w-100 carousel-image rounded-4" />
                                </div>
                                <div className="carousel-item">
                                    <img src={month2} alt="" className="d-block w-100 carousel-image rounded-4" />
                                </div>
                            </div>


                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="col-md-5 order-md-1 mt-4 p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide" data-aos-once="true">
                    <div>
                        <h2 className="text-dark py-3">မြန်မာ့ ၁၂ လရာသီများ</h2>
                        <p className='text-dark py-3 text-center mb-3'>မြန်မာပြက္ခဒိန် -  ၁၂ လဖြင့် ဖွဲ့စည်းထားပြီး ဗုဒ္ဓဘာသာနှင့် သက်ဆိုင်သည့် ပွဲတော် ၁၂ ခုကို ရေတွက်ပါသည်။
                            အရေးအကြီးဆုံးပွဲတော်မှာ နှစ်သစ်ကူးအကြို၊ သင်္ကြန် သို့မဟုတ် ရေပွဲတော်ဖြစ်ပြီး 4/5 ရက်ကြာမြင့်မည် ဖြစ်ပါသည်။</p>
                    </div>
                    <div className="floating-images">
                        <img src={culture1} alt="Floating Image 1" data-aos="fade-up" />
                        <img src={culture2} alt="Floating Image 1" data-aos="fade-up" />
                        <img src={culture3} alt="Floating Image 2" data-aos="fade-up" data-aos-delay="200" />
                    </div>

                </div>
            </div>


            <MonthLists />
        </div>
    );
}

export default Home;