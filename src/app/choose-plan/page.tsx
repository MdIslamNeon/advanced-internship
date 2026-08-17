"use client";

import styles from "./page.module.css";
import pricingTop from "../../../public/pricing-top.png";
import Image from "next/image";
import { IoDocumentText } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { useState } from "react";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";

function ChoosePlanPage() {
  const [activeId, setActiveId] = useState("month");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const plans = [
    {
      id: "month",
      name: "Monthly Plan",
      price: "$9.99",
      text: "No trial included",
    },
    {
      id: "year",
      name: "Premium Plus Yearly",
      price: "$99.99",
      text: "7-day free trial included",
    },
  ];

  return (
    <div className={styles.plan}>
      <div className={styles.plan__header_wrapper}>
        <div className={styles.plan__header}>
          <div className={styles.plan__title}>
            Get unlimited access to many amazing books to read
          </div>
          <div className={styles.plan__subtitle}>
            Turn ordinary moments into amazing learning oppurtunities
          </div>
          <figure className={styles.plan__img_mask}>
            <Image
              className={styles.plan__img_img}
              src={pricingTop}
              alt="Pricing"
            />
          </figure>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.plan__features_wrapper}>
            <div className={styles.plan__features}>
              <figure className={styles.plan__features_icon}>
                <IoDocumentText className={styles.plan__features_icon_img} />
              </figure>
              <div className={styles.plan__features_text}>
                <b>Key ideas in a few minutes</b> with many books to read
              </div>
            </div>
            <div className={styles.plan__features}>
              <figure className={styles.plan__features_icon}>
                <RiPlantFill className={styles.plan__features_icon_img} />
              </figure>
              <div className={styles.plan__features_text}>
                <b>3 million</b> people growing with Summarist everyday
              </div>
            </div>
            <div className={styles.plan__features}>
              <figure className={styles.plan__features_icon}>
                <FaHandshake className={styles.plan__features_icon_img} />
              </figure>
              <div className={styles.plan__features_text}>
                <b>Precise recommendations</b> collections curated by experts
              </div>
            </div>
          </div>
          <div className={styles.section__title}>
            Choose the plan that fits you
          </div>
          {plans.map((plan) => {
            const cardClassName = `${styles.plan__card} ${
              activeId === plan.id ? styles.active__card : ""
            }`;

            return (
              <Fragment key={plan.id}>
                <div
                  className={cardClassName}
                  onClick={() => setActiveId(plan.id)}
                >
                  <div className={styles.plan__card_circle}>
                    {activeId === plan.id ? (
                      <div className={styles.plan__card_dot}></div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={styles.plan__card_content} key={plan.id}>
                    <div className={styles.plan__card_title}>{plan.name}</div>
                    <div className={styles.plan__card_price}>
                      {plan.price} per {plan.id}
                    </div>
                    <div className={styles.plan__card_text}>{plan.text}</div>
                  </div>
                </div>
                {plan.id === "year" ? (
                  <></>
                ) : (
                  <div className={styles.plan__card_separator}>
                    <div className={styles.plan__separator}>or</div>
                  </div>
                )}
              </Fragment>
            );
          })}
          <div className={styles.plan__card_cta}>
            <span className={styles.btn_wrapper}>
              <button className={styles.btn}>
                <span>Start your free 7-day trial</span>
              </button>
            </span>
            <div className={styles.plan__disclaimer}>
              Cancel your trial at any time before it ends, and you won’t be
              charged.
            </div>
          </div>
          <div className={styles.faq_wrapper}>
            <div
              className={styles.accordion__card}
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <div className={styles.accordion__header}>
                <div className={styles.accordion__title}>
                  How does the free 7-day trial work?
                </div>
                <IoIosArrowDown
                  className={`${styles.accordion__icon} ${isOpen1 ? styles.accordion__icon_rotate : ""}`}
                />
              </div>
              <div
                className={`${styles.collapse} ${isOpen1 ? styles.collapse_open : ""}`}
              >
                <div className={styles.accordion__body}>
                  Begin your complimentary 7-day trial with a Summarist annual
                  membership. You are under no obligation to continue your
                  subscription, and you will only be billed when the trial
                  period expires. With Premium access, you can learn at your own
                  pace and as frequently as you desire, and you may terminate
                  your subscription prior to the conclusion of the 7-day free
                  trial.
                </div>
              </div>
            </div>
            <div
              className={styles.accordion__card}
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <div className={styles.accordion__header}>
                <div className={styles.accordion__title}>
                  Can I switch subscriptions from monthly to yearly, or yearly
                  to monthly?
                </div>
                <IoIosArrowDown
                  className={`${styles.accordion__icon} ${isOpen2 ? styles.accordion__icon_rotate : ""}`}
                />
              </div>
              <div
                className={`${styles.collapse} ${isOpen2 ? styles.collapse_open : ""}`}
              >
                <div className={styles.accordion__body}>
                  While an annual plan is active, it is not feasible to switch
                  to a monthly plan. However, once the current month ends,
                  transitioning from a monthly plan to an annual plan is an
                  option.
                </div>
              </div>
            </div>
            <div
              className={styles.accordion__card}
              onClick={() => setIsOpen3(!isOpen3)}
            >
              <div className={styles.accordion__header}>
                <div className={styles.accordion__title}>
                  What&apos;s included in the Premium plan?
                </div>
                <IoIosArrowDown
                  className={`${styles.accordion__icon} ${isOpen3 ? styles.accordion__icon_rotate : ""}`}
                />
              </div>
              <div
                className={`${styles.collapse} ${isOpen3 ? styles.collapse_open : ""}`}
              >
                <div className={styles.accordion__body}>
                  Premium membership provides you with the ultimate Summarist
                  experience, including unrestricted entry to many best-selling
                  books high-quality audio, the ability to download titles for
                  offline reading, and the option to send your reads to your
                  Kindle.
                </div>
              </div>
            </div>
            <div
              className={styles.accordion__card}
              onClick={() => setIsOpen4(!isOpen4)}
            >
              <div className={styles.accordion__header}>
                <div className={styles.accordion__title}>
                  Can I cancel during my trial or subscription?
                </div>
                <IoIosArrowDown
                  className={`${styles.accordion__icon} ${isOpen4 ? styles.accordion__icon_rotate : ""}`}
                />
              </div>
              <div
                className={`${styles.collapse} ${isOpen4 ? styles.collapse_open : ""}`}
              >
                <div className={styles.accordion__body}>
                  You will not be charged if you cancel your trial before its
                  conclusion. While you will not have complete access to the
                  entire Summarist library, you can still expand your knowledge
                  with one curated book per day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__row}>
              <div className={styles.footer__top_wrapper}>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Actions</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Summarist Magazine</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Cancel Subcription</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Help</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Contact us</a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Useful Links</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Pricing</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Summarist Business</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Gift Cards</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Authors & Publishers</a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Company</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>About</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Careers</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Partners</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Code of Conduct</a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Other</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Sitemap</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Legal Notice</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Terms of Service</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Privacy Policies</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer__copyright_wrapper}>
                <div className={styles.footer__copyright}>Copyright &copy; 2026 Summarist</div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default ChoosePlanPage;
