<template>
  <div class="contact">
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <div>
            <h2>تواصل معنا !</h2>
            <p class="text-gray">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <b-card class="shadow rounded bg-light">
            <b-form>
              <b-row>
                <b-col cols="12" >
                  <div class="d-flex flex-column">
                    <label for="" class="g2">الاسم</label>
                    <b-input
                      class="rounded-pill"
                      placeholder="ادخل اسمك "
                    ></b-input>
                  </div>
                </b-col>
                <b-col cols="12" class="mt-4">
                  <div class="d-flex flex-column">
                    <label for="" class="g2">البريد الالكتروني</label>
                    <b-input
                      placeholder="ادخل اسمك "
                      class="rounded-pill"
                      type="email"
                    ></b-input>
                  </div>
                </b-col>
                <b-col cols="12" class="mt-4">
                  <div class="d-flex flex-column">
                    <label for="" class="g2">الرسالة</label>
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
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
          color: #ffd400 !important;
          font-size: 15px !important;
        }
      }
      button {
        color: #fff !important;
      }
    }
  }
}
</style>