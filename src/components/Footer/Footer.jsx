import { Divider, Grid, Item } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-20 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-center py-10">
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              width={240}
              height={160}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="border-t-4 border-b-4 divider-color grid justify-center md:flex md:justify-around xl:px-20 py-4">
          <li className="py-3 text-center">
            <Link href="/about" className="xl:text-xl">
              درباره ما
            </Link>
          </li>
          <Divider
            orientation="vertical"
            className="divider-color border-2 w-20 mx-auto  md:w-auto"
            variant="middle"
            flexItem
          />
          <li className="py-3 text-center ">
            <Link href="/about" className="md:text-md xl:text-xl">
              پرسش‌های متداول
            </Link>
          </li>
          <Divider
            orientation="vertical"
            className="divider-color border-2 w-20 mx-auto md:w-auto"
            variant="middle"
            flexItem
          />
          <li className="py-3 text-center ">
            <Link href="/about" className="xl:text-xl">
              انتقادات و پیشنهادات
            </Link>
          </li>
          <Divider
            orientation="vertical"
            className="divider-color border-2 w-20 mx-auto md:w-auto"
            variant="middle"
            flexItem
          />
          <li className="py-3 text-center ">
            <Link href="/about" className="xl:text-xl">
              قوانین خدمات
            </Link>
          </li>
          <Divider
            orientation="vertical"
            className="divider-color border-2 w-20 mx-auto md:w-auto"
            variant="middle"
            flexItem
          />
          <li className="py-3 text-center">
            <Link href="/about" className="xl:text-xl">
              شرایط بهداشتی فروشگاه
            </Link>
          </li>
        </ul>
        <Grid
          className="py-10 border-b-4 divider-color"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4} className="border-dir pb-5 md:pb-0">
            <div className="grid place-content-center gap-3 text-center">
              <h5 className="text-xl">تماس با ما</h5>
              <Link
                href="mailto:info@torshoshirin.com"
                className="text-color-light"
              >
                info@torshoshirin.com
              </Link>
              <Link href="tel:09397777258" className="text-color-light">
                09397777258
              </Link>
              <Link href="/contactus" className="text-color-light">
                تماس با ما
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="border-dir pb-5 md:pb-0">
            <div className="grid place-content-center gap-3 text-center">
              <h5 className="text-xl">تماس با ما</h5>
              <address className="text-color-light">
                ساری-میدان پلیس-نبش فاتحی
              </address>
              <Link href="tel:09397777258" className="text-color-light">
                09397777258
              </Link>
              <Link href="/contactus" className="text-color-light">
                ساعت کاری: 22-8
              </Link>
            </div>
          </Grid>
          <Grid container item xs={12} md={4} className="pb-5 md:pb-0">
            <Grid
              item
              xs={12}
              md={5}
              className="grid place-content-center gap-5 text-center"
            >
              <h5 className="text-xl">شبکه‌های اجتماعی</h5>
              <div className="flex gap-5 md:grid justify-center">
                <Link href="#" className="flex justify-center">
                  <Image
                    src="/assets/img/insta.png"
                    width={46}
                    height={46}
                    alt="instagram"
                  />
                </Link>
                <Link href="#" className="flex justify-center">
                  <Image
                    src="/assets/img/telegram.png"
                    width={46}
                    height={46}
                    alt="telegram"
                  />
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="flex justify-center items-end">
              <Link href="#" className="flex justify-center">
                <Image
                  src="/assets/img/enamad.png"
                  width={100}
                  height={144}
                  alt="instagram"
                />
              </Link>
              <Link href="#" className="flex justify-center">
                <Image
                  src="/assets/img/samandehi.png"
                  width={120}
                  height={120}
                  alt="telegram"
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <div className="py-3">
          <p className="text-center">
            تمام حقوق سایت برای فروشگاه اینترنتی ترش‌و‌شیرین‌ محفوظ است.
          </p>
          <p className="text-center">
            Developed by{" "}
            <Link href="jco.ir" className="underline underline-offset-8">
              jco.ir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
