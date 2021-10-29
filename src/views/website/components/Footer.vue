<template>
  <footer>
    <b-container>
      <div class="py-5">
        <b-row>
          <b-col>
            <h4>خريطة الموقع</h4>
            <ul>
              <li>الرابط الاول</li>
              <li>الرابط الثاتي</li>
              <li>الرابط الثالث</li>
            </ul>
          </b-col>
          <b-col>
            <h4>تواصل معنا</h4>
            <ul>
              <li>الرابط الاول</li>
              <li>الرابط الثاتي</li>
              <li>الرابط الثالث</li>
            </ul>
          </b-col>
          <b-col>
            <h4>سوشيال ميديا</h4>
            <ul>
              <li>الرابط الاول</li>
              <li>الرابط الثاتي</li>
              <li>الرابط الثالث</li>
            </ul>
          </b-col>
          <b-col>
            <h4>مواقع صديقة</h4>
            <ul>
              <li>الرابط الاول</li>
              <li>الرابط الثاتي</li>
              <li>الرابط الثالث</li>
            </ul>
          </b-col>
          <b-col>
            <h4>علامات تجارية</h4>
            <ul>
              <li>الرابط الاول</li>
              <li>الرابط الثاتي</li>
              <li>الرابط الثالث</li>
            </ul>
          </b-col>
          <b-col cols="12"> </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="  bg-custom-yello w-100 py-2  d-flex align-items-center justify-content-center">
      <span class=" ml-2 mt-3"> <strong>  2021 &copy; جميع الحقوق محفوظة  </strong></span>  <b-img width="50px" src="/images/log.svg" ></b-img>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../assets/variables.scss";
footer{
  background-color: $custom-dark !important;

 
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  color: $g1 !important;
  padding: 15px 0;
}
h4 {
  color: $yello !important;
}
}

</style>
