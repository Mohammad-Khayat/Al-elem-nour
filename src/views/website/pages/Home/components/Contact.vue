<template>
  <div class="contact">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" data-aos='fade-left'>
        <b-row>
        <b-col cols="12">
          <div>
            <h2>تواصل معنا !</h2>
            <p class="text-gray">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص    
            </p>
          </div>
        </b-col>
        <b-col cols="12"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12877.845121296768!2d37.10014541726569!3d36.20398153721579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff7f986fe3ddf%3A0x6cc2cf38e372f246!2sAleppo%20University!5e0!3m2!1sen!2suk!4v1635199921320!5m2!1sen!2suk" class="w-100"  height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe></b-col>
        </b-row>
          
        </b-col>
        <b-col cols="12" md="6" data-aos=fade-right>
        <div class="d-flex align-items-center h-100">
          <b-card class="shadow rounded  form-card">
            <b-form>
              <b-row>
                <b-col cols="12" >
                  <div class="d-flex flex-column">
                    <label for="" class="g2 mr-3">الاسم</label>
                    <b-input
                      class="rounded-pill"
                      placeholder="ادخل اسمك "
                    ></b-input>
                  </div>
                </b-col>
                <b-col cols="12" class="mt-4">
                  <div class="d-flex flex-column">
                    <label for="" class="g2 mr-3">البريد الالكتروني</label>
                    <b-input
                      placeholder="ادخل بريدك الالكتروني "
                      class="rounded-pill"
                      type="email"
                    ></b-input>
                  </div>
                </b-col>
                <b-col cols="12" class="mt-4">
                  <div class="d-flex flex-column">
                    <label for="" class="g2 mr-3">الرسالة</label>
                    <b-textarea
                      placeholder="ادخل نص الرسالة  "
                      class="rounded-pill"
                      type="email"
                    ></b-textarea>
                  </div>
                </b-col>
                <b-col cols="12" class="mt-4">
                  <b-button class="back-yello border-0 rounded-pill px-4 py-2">
                    ارسال

                    <span class="mdi mdi-message-text"></span>
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import aos from 'aos'
export default {
  created(){
    aos.init();
  }
};
</script>

<style lang='scss'>
.contact {
  .card {
    border: 0;
    border-radius: 20px !important;
    form {
      input,
      textarea {
        border: 0 !important;
        box-shadow: 1px 5px 10px 1px #7772;
        &::placeholder {
          color: rgb(179, 179, 179) !important;
          font-size: 12px !important;
        }
      }
      label{
        color: #FFD400 !important;
      }
      button {
        color: #fff !important;
      }
    }
  }
  .form-card{
    background-color: #fcfcfcd0;
    backdrop-filter: blur(5px);
  }
}
</style>