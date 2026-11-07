import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def generate_pdf(output_path):
    # Dimensions: letter is 612 x 792 pt. 0.45 in margin = ~32.4 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=26,
        bottomMargin=26,
    )

    styles = getSampleStyleSheet()

    # Custom styles matching Times New Roman ATS template
    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=18,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.black,
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=9.5,
        leading=12.5,
        alignment=TA_CENTER,
        textColor=colors.black,
    )

    heading_style = ParagraphStyle(
        'DocHeading',
        parent=styles['Normal'],
        fontName='Times-Bold',
        fontSize=10.5,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.black,
        spaceBefore=6,
        spaceAfter=1,
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.8,
        leading=11.6,
        alignment=TA_JUSTIFY,
        textColor=colors.black,
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=8.6,
        leading=11.2,
        alignment=TA_LEFT,
        textColor=colors.black,
        leftIndent=12,
    )

    story = []

    # 1. Header
    story.append(Paragraph("<b>KANDA KEDARESWAR</b>", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph('Nandyal, Andhra Pradesh, India &nbsp;|&nbsp; 9347651446 &nbsp;|&nbsp; <a href="mailto:kandakedareswar@gmail.com"><font color="#1F4E79"><u>kandakedareswar@gmail.com</u></font></a>', contact_style))
    story.append(Paragraph('GitHub: <a href="https://github.com/kedareswarkanda"><font color="#1F4E79"><u>github.com/kedareswarkanda</u></font></a> &nbsp;|&nbsp; LinkedIn: <a href="https://linkedin.com/in/kedareswarkanda"><font color="#1F4E79"><u>linkedin.com/in/kedareswarkanda</u></font></a>', contact_style))
    story.append(Spacer(1, 2))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#1F4E79'), spaceBefore=2, spaceAfter=4))

    def add_section(title):
        story.append(Paragraph(f"<b>{title}</b>", heading_style))
        story.append(HRFlowable(width="100%", thickness=1.0, color=colors.HexColor('#1F4E79'), spaceBefore=1, spaceAfter=3))

    # 2. Career Objective
    add_section("CAREER OBJECTIVE")
    story.append(Paragraph(
        "Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning, with a foundation in Python, Java, SQL, machine learning and web development. Hands-on experience building AI-powered applications and contributing to software projects. Interested in software development and AI/ML opportunities where I can apply programming, analytical thinking and collaboration skills.",
        body_style
    ))
    story.append(Spacer(1, 3))

    # 3. Education
    add_section("EDUCATION")
    edu_text_1 = "<b>B.Tech, Computer Science and Engineering (AI & ML)</b> | Kalasalingam Academy of Research and Education, Tamil Nadu | <i>2024–2028</i> - CGPA: 8.41"
    edu_text_2 = "<b>Intermediate (MPC)</b> | SDRs Akanksha Junior College, Nandyal, Andhra Pradesh | <i>2024</i> - Percentage: 88.5%"
    edu_text_3 = "<b>10th Class</b> | Narayana Group of Schools, Kurnool, Andhra Pradesh | <i>2022</i> - Percentage: 74.13%"
    story.append(Paragraph(edu_text_1, body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(edu_text_2, body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(edu_text_3, body_style))
    story.append(Spacer(1, 3))

    # 4. Technical Skills
    add_section("TECHNICAL SKILLS")
    skills = [
        "<b>Programming:</b> Python, Java(Basics), C(Basics)",
        "<b>Web Development:</b> HTML, CSS, JavaScript (basics), React",
        "<b>AI & Machine Learning:</b> Supervised and unsupervised learning, regression, classification, model evaluation, NLP (TF-IDF), XGBoost",
        "<b>Databases & Backend:</b> SQL, Firebase, MongoDB, FastAPI, PostgreSQL",
        "<b>Tools:</b> VS Code, GitHub, Google Colab",
        "<b>Soft Skills:</b> Problem solving, teamwork, team coordination, creative and critical thinking"
    ]
    for s in skills:
        story.append(Paragraph(s, body_style))
        story.append(Spacer(1, 0.8))
    story.append(Spacer(1, 2))

    # 5. Projects
    add_section("PROJECTS")
    # Project 1
    story.append(Paragraph("<b>UniPulse – AI-Powered Academic and Career Guidance Platform</b> | <i>2026</i>", body_style))
    story.append(Paragraph("• Designed a centralized platform concept for academic resources, career roadmaps and certification discovery.", bullet_style))
    story.append(Paragraph("• Planned AI-assisted guidance and a chatbot with file/photo upload; proposed stack: Next.js, FastAPI and Firebase.", bullet_style))
    story.append(Spacer(1, 1.5))
    # Project 2
    story.append(Paragraph("<b>Solar & Wind Deployment Intelligence Platform</b> | <i>Infosys Springboard project</i>", body_style))
    story.append(Paragraph("• Worked on a platform backend for renewable-energy site assessment using solar, wind, terrain and infrastructure data.", bullet_style))
    story.append(Paragraph("• Backend technologies include FastAPI, PostgreSQL and SQLAlchemy; dashboard visualizations use Chart.js.", bullet_style))
    story.append(Spacer(1, 1.5))
    # Project 3
    story.append(Paragraph("<b>SolarIQ – AI Solar Panel Performance and Efficiency Optimizer</b> |", body_style))
    story.append(Paragraph("• Developed a full-stack solar analysis application combining physics-based performance calculations with AI predictions.", bullet_style))
    story.append(Paragraph("• Implemented performance analysis and what-if optimization workflows; technology stack includes React, FastAPI, XGBoost and MongoDB.", bullet_style))
    story.append(Spacer(1, 3))

    # 6. Internships & Experience
    add_section("INTERNSHIPS & EXPERIENCE")
    story.append(Paragraph("<b>Full Stack Development Intern</b> | ByteHearts", body_style))
    story.append(Paragraph("• Selected for a four-month internship following a hackathon selection process.", bullet_style))
    story.append(Paragraph("• Worked on web development tasks and collaborated with a team.", bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("<b>AI & ML Virtual Intern</b> | Infosys Springboard", body_style))
    story.append(Paragraph("• Completed AI/ML internship learning modules and practical activities.", bullet_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("<b>Web Developer</b> | IKSC", body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("<b>Content Creator</b> | Coding Blocks", body_style))
    story.append(Spacer(1, 3))

    # 7. Achievements & Publication
    add_section("ACHIEVEMENTS & PUBLICATION")
    story.append(Paragraph("• Winner – KRONE'26 National-Level Hackathon.", bullet_style))
    story.append(Paragraph('• Publication: “Automated System-based Attendance System” – JETNR.', bullet_style))
    story.append(Spacer(1, 3))

    # 8. Certifications
    add_section("CERTIFICATIONS")
    story.append(Paragraph("Quantum Computing – IUCEE", body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("Python – CodeTantra", body_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("Database Management System – Design and Analysis of Algorithm – CodeChef", body_style))

    # Build document
    doc.build(story)
    print(f"Successfully generated PDF: {output_path}")

if __name__ == "__main__":
    generate_pdf("public/Kanda_Kedareswar_Resume.pdf")
    generate_pdf("public/resume.pdf")
