import React, { forwardRef } from "react";
import styles from "./Template43.module.css";

const Template43 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information.coverLetter || "",
    recipient: information.recipient || {}, // Recipient details
  };

  return (
    <div className={styles.coverContainer} ref={ref}>
      <div className={styles.coverPage}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h1 className={styles.name}>
            {info.basicInfo.name || "Doris Johnson"}
          </h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Project Manager"}
          </p>

          <div className={styles.contactInfo}>
            {info.basicInfo.email && <p>✉️ {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p>📞 {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Recipient Details */}
          <section className={styles.recipientSection}>
            <p>
              <strong>{info.recipient.name || "Alice Johnson"}</strong>
            </p>
            <p>{info.recipient.company || "Optimal Workplace Inc"}</p>
            <p>
              {info.recipient.address || "321 Employment Avenue, Atlanta, GA"}
            </p>
            <p>{info.recipient.date || new Date().toDateString()}</p>
          </section>

          {/* Cover Letter Content */}
          <section className={styles.letterContent}>
            <p>
              {info.coverLetter ||
                "As a highly skilled project manager with 11 years of experience, I am writing to express my interest in the Project Manager position at your company. My experience aligns well with the role, as I have led multiple large-scale projects requiring strategic planning, execution, and leadership. I am confident that my expertise in project coordination and team management make me a strong candidate for this role."}
            </p>

            <p>
              Throughout my career, I have successfully overseen projects from
              inception to completion, ensuring they are delivered on time and
              within budget. My ability to effectively communicate with
              cross-functional teams, manage stakeholder expectations, and
              implement innovative solutions has contributed to my success in
              driving efficiency and achieving company goals.
            </p>

            <p>
              In my previous role at XYZ Corp, I spearheaded a project that
              resulted in a 30% increase in operational efficiency. By
              optimizing workflows, streamlining communication between
              departments, and leveraging agile methodologies, I was able to
              enhance productivity while maintaining quality standards. I take
              pride in my problem-solving skills and my ability to motivate
              teams to perform at their best.
            </p>

            <p>
              I am particularly drawn to this opportunity because of your
              company's commitment to innovation and excellence. I am eager to
              contribute my expertise in project management and leadership to
              drive positive results. I welcome the opportunity to discuss how
              my background, skills, and enthusiasm align with your needs.
            </p>
          </section>

          {/* Footer */}
          <footer className={styles.footer}>
            <p>Sincerely,</p>
            <p className={styles.signature}>
              {info.basicInfo.name || "Doris Johnson"}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default Template43;
