function navigate(element) {
  let nav = document.getElementById("spa");
  if (element == "home") {
    nav.innerHTML = ` <!-- carousel -->
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active first">
                <div class="d-flex align-items-end" style="height:80vh">
                    <div class="container" style="text-align: center;"><a>
                            <h3>Immigration Visa Services</h3>
                        </a>
                        <p>A visa is a legal document that enables the bearer to enter a foreign country legally. The
                            bearer’s
                            passport is normally stamped or affixed with the visa. There are a variety of visas
                            available, each of
                            which grants the bearer the permission to either live, work, tour or study in the country.
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item second">
                <div class="d-flex align-items-end" style="height:80vh">
                    <div class="container" style="text-align: center;"><a>
                            <h3>Company Setup Services</h3>

                        </a>
                        <p>Business start-up specialists providing comprehensive business consulting services. We offer
                            quick
                            company registration with the step-by-step guidance of the process and 24/7 support.</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item third">
                <div class="d-flex align-items-end" style="height:80vh">
                    <div class="container" style="text-align: center;"><a>
                            <h3>Compliance Management</h3>

                        </a>
                        <p>Setting The Standard Specialists in Compliance Management Services</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- carousel end -->

    <!-- links -->
    <div class="linkMain">
        <div class="container  d-flex justify-content-center align-items-center">
            <div class="links  d-flex justify-content-center align-items-center">
                <div class="row">
                    <div type="button" onclick="navigate('visa')" class="col-lg-4"><a>Immigration Visa Services</a></div>
                    <div type="button" onclick="navigate('setup')" class="col-lg-4"><a>Company setup Services</a></div>
                    <div type="button" onclick="navigate('compl')" class="col-lg-4"><a>Compliance Management</a></div>
                    <div type="button" onclick="navigate('civil')" class="col-lg-6"><a>Civil Mediation Services</a></div>
                    <div type="button" class="col-lg-6"><a>Conveyancing Staff Training and assistance to Law Firms</a></div>
                </div>
            </div>
        </div>
    </div>

    <!-- links -->

    <!-- contact -->
    <div class="contactMain">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="inputs">
                <h2 style="text-align: center; margin-top: 8px;">Contact Us</h2>
                <div class="contact">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="E-mail">
                    <input type="text" placeholder="Subject">
                    <input type="textarea" placeholder="Message">
                </div>
               <div style="text-align: center;"> <button type="button" class="btn btn-danger">Submit</button></div>
            </div>
        </div>
    </div>


    <!-- contact end -->
`
document.getElementById("home").classList.add("active");
document.getElementById("about").classList.remove("active");
document.getElementById("services").classList.remove("active");
document.getElementById("contact").classList.remove("active");
  }

  else if (element == "about") {
    nav.innerHTML = `<!-- about -->
    <div class="aboutUs">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="aboutImg"></div>
                </div>
                <div class="col-lg-6">
                    <div class="aboutUp">
                        <h2 style="text-align: center;">Who <span style="color: brown;"> We</span> are?</h2>
                        <p>We have been in the immigration business for the last 11 years, and our team of talented
                            individuals is always ready to give their all to improve your life in every way they
                            can! We are experts in this field. We have been imagining every tale for years,
                            developing industry-specific knowledge and skills, and assisting people in realizing
                            their ambitions, so sure, that is all that matters. We are fully aware of how things
                            operate.</p>
                    </div>
                    <div class="aboutLow">
                        <h2 style="text-align: center;">What Makes <span style="color: brown;"> Us</span> So Special?</h2>
                        <p>We consistently provide dependable immigration, education, and legal management services
                            thanks to our staff of highly skilled immigration consultants, experienced, and expertly
                            educated instructors.</p>
                    </div>
                </div>
            </div>
            <div class="aboutBot1">
                <h2 style="text-align: center;">Why <span style="color: brown;"> Choose </span> DHBHAF?</h2>
                <p>Globally, DHBHAF is present in South Africa, the United Kingdom, Canada, Australia, UAE (United
                    Arab Emirates), and other nations. We are a licensed, global education and immigration
                    consultancy with knowledgeable, skilled immigration advisors at your disposal.</p>
            </div>
            <div class="aboutBot2">
                <h2 style="text-align: center;">What Do <span style="color: brown;"> We </span>Deliver?</h2>
                <p>Our team of highly qualified immigration consultants, experienced & practicing, and skillfully
                    trained instructors has been consistent in delivering reliable immigration, education and legal
                    management</p>
            </div>

        </div>
    </div>






    <!-- about end -->
`
document.getElementById("about").classList.add("active");
document.getElementById("home").classList.remove("active");
document.getElementById("services").classList.remove("active");
document.getElementById("contact").classList.remove("active");
  }

  else if (element == "visa") {
    nav.innerHTML = `   <div class="visaMain">
    <div class="container d-flex justify-content-center">
        <div class="visa">
            <h2 style="text-align: center;">Immigration <span style="color: green;"> Visa </span> Services</h2>
            <div class="visaImg"></div>
            <p>A visa is a legal document that enables the bearer to enter a foreign country legally. The
                bearer’s passport is normally stamped or affixed with the visa. There are a variety of visas
                available, each of which grants the bearer the permission to either live, work, tour or study in
                the country.</p>
        </div>
       
    </div>
    <h4 style="color: brown;text-align: center;">Here is a list of common types of visas:</h4>
    <div class="visaLower">
        <div class="visaList">
            <h4>Permanent <span style="color: brown;"> residency</span></h4>
            <p>A PR visa, or Permanent Resident Visa, allows you to travel to a nation, stay for a period of
                time, and then seek for citizenship. In some countries, obtaining a PR visa eventually leads
                to citizenship.</p>
        </div>
        <div class="visaList">
            <h4>Vis<span style="color: brown;">it</span></h4>
            <p>Visit visas are non-immigrant visas that are required if an individual wishes to enter a
                country temporarily for business, tourism, or transit when travelling by air or ship.</p>
        </div>
        <div class="visaList">
            <h4>Stu<span style="color: brown;">dy</span></h4>
            <p>Students enrolled in recognized educational institutions in foreign countries are granted a
                student visa. Non-immigrant visas are available for students. Students who intend to pursue
                higher education in another nation must apply for a student visa in order to study there.
            </p>
        </div>
        <div class="visaList">
            <h4>Wo<span style="color: brown;">rk</span></h4>
            <p>A work visa allows you to travel to another nation and work for a set amount of time. For
                work permit visas, different nations may have distinct procedures and qualifying
                requirements. These visas are available in two types: temporary and permanent. A temporary
                work visa is only valid for a set amount of time and must be renewed if the visa holder
                wants to extend his stay. In most cases, the employer is the one who applies for a work
                permit visa. The employer will submit a visa application to the immigration authority of a
                specific country.</p>
        </div>
        <div class="visaList">
            <h4>Busi<span style="color: brown;">ness</span></h4>
            <p>Travelers who intend to perform business operations and meetings that are not tied to work in
                that nation are issued business visas by government officials in that country.</p>
            <h6>A business visa permits the holder to do the following:</h6>
            <p>| Participate in meetings. | Attend conferences and business events | Investigate new
                business ventures and opportunities |</p>
        </div>
        <div class="visaList">
            <h4>Invest<span style="color: brown;">or</span></h4>
            <p>Countries issue investor visas to encourage people with an established business track record
                and a genuine desire to start a business in another country to invest in their country. This
                can be a new business endeavor or the purchase of an existing international company.

                Immigrant Investor Programs are designed to attract potential immigrant investors with
                sufficient personal wealth and managerial skills. Any business, with the exception of those
                that operate for the purpose of gaining interest or capital gains, qualifies for this
                program.

                Every country that grants an investment visa has its unique set of criteria and
                restrictions.

            </p>
        </div>
        <div class="visaList">
            <h4>Depend<span style="color: brown;">end</span></h4>
            <p>A dependent visa is a sort of visa that allows spouses and children to go to another country
                to accompany or join a family member who has a matching Visa.

                Dependents of a lawful migrant to a country, such as spouse, dependent children, or parents,
                can enter and reside in the country with a dependent visa. Dependents of migrants can seek
                for a visa to join them in the nation.

                Applying for a visa can be a stressful prospect. With an endless train of paperwork and
                documentation, it can quickly become overwhelming. DHBHAF has the knowledge, experience, and
                robust processes to help you navigate complex visa procedures and file your visa application
                with greater confidence.

                Each country offers different types of visa base on the purpose of your visit. Though you
                can apply for a visa to most countries online. It will take some time for you to understand
                the process, get the required documents, and fill the application form. You must ensure that
                you meet the eligibility requirements and requirements specific to the country you wish to
                move to.

                Remember there are different requirements for a student visa, a tourist visa, a work visa,
                etc. You must understand the specific requirements of the visa you are applying for and fill
                the application form and follow the other processes to get your visa.

                This is where the advice of a visa counselor or a visa advisor will be valuable to help you
                understand the different visas available and the specific requirements for your visa. A visa
                counselor will help you with the application process to successfully procure your visa.</p>
        </div>
        <div class="visaList">
            <h4 style="color: brown;">Here are the general steps you must follow in order to get a visa: </h4>
            <ol>
                <li> Choose your visa</li>
                <li>Prepare your application</li>
                <li>Attend an appointment at the country’s embassy or consulate</li>
                <li>Get a decision on your application</li>
                <li>Following the process and getting it right can sometimes get overwhelming. A better
                    option is to consult an immigration expert who can help you in an efficient way.</li>
            </ol>
        </div>
        <div class="visaList">
            <h4>How <span style="color: brown;"> DHBHAF</span> Can Help You?</h4>
            <ul>
                <li>Identifying the best strategy to get your visa</li>

                <li>Advising you on finances to be shown</li>
                <li>Advising you on papers to be presented</li>
                <li>Help in filling of forms</li>
                <li> Review of all your papers before their submission</li>
                <li>DHBHAF has the knowledge, experience and robust processes to help you navigate complex
                    visa procedures and file your visa application with greater confidence.</li>
            </ul>
        </div>
    </div>
</div>`
document.getElementById("services").classList.add("active");
 document.getElementById("home").classList.remove("active");
 document.getElementById("contact").classList.remove("active");
 document.getElementById("about").classList.remove("active");
  }
  else if (element == "setup") {
    nav.innerHTML = ` <div class="setupMain">
    <h2 style="text-align: center;">Company <span style="color: green;"> Setup</span> Services</h2>
    <div class="container d-flex justify-content-center">
        <div class="setupUp">
            <div class="setupImg"></div>
        </div>
    </div>
    <p>We offer quick company registration with the step-by-step guidance of the process and 24/7 support.<br><br>

        If you are confused & don’t know where to start, don’t worry!Contact us for professional assistance on
        how & which company model to determine for your startup. Whether you are planning on registering a sole
        proprietorship business, private limited company, public limited company, partnership firm or any other
        corporation, we can help in everything. Private Limited Company registration is the most preferred form
        of business structure in the business class. Why should we register a company?Getting your company
        registered officially can make a big difference for your business. People will start trusting your
        business and will have more interest in working with you as everything will be documented.<br><br>

        Our business services and solutions provide you with support in every aspect of your business – from
        company registrations and certifications which we manage on your behalf, to marketing, business
        insurance, immigration, business funding, accounting, business analysis, compliance, secretarial
        services and so much more.</p>
</div>`
document.getElementById("services").classList.add("active");
 document.getElementById("home").classList.remove("active");
 document.getElementById("contact").classList.remove("active");
 document.getElementById("about").classList.remove("active");  

}


  else if (element == "compl") {
    nav.innerHTML = ` <div class="complMain">
    <h2 style="text-align: center;">Compliance <span style="color: green;"> Management</span> Services</h2>
    <div class="container d-flex justify-content-center">
        <div class="complUp">
            <div class="complImg"></div>
        </div>
    </div>
    <div class="container">
        <h2>DHBHAF <span style="color: brown;"> Compliance</span> Management</h2>
        <p>Compliance Management is a concern for many industries. Our aim is to assist clients to develop,
            implement and manage compliance, through the introduction of custom, meaningful systems.</p>

        <h6>We specialise in the design and implementation of :</h6>
        <ul>
            <li>Compliance Management Systems</li>
            <li>Quality Assurance Assessments</li>
            <li>Digital Asset Management & Monitoring</li>
            <li>Centralised Reporting Systems</li>
            <li> Spending so much time over the past years managing compliance, means that BAMS is uniquely
                suited to develop and test new software products.</li>
        </ul><br>
        <p>We believe that all industries and franchises will benefit from our compliance software solutions.

        </p><br>

        <h2>Digital <span style="color: brown;"> Checklists</span></h2>
        <p>We aid in creating and managing digital checklists to help improve your process efficiency and
            quality.</p>
        <h6>We specialise in:</h6>
        <ul>
            <li> Ease of documentation processing.</li>
            <li>Creation of checklists inline with your industry needs.

            </li>
            <li>Real-time document monitoring with the click of a button.</li>
            <li>Intergration with your business processes.</li>

        </ul><br>
        <p>Paper checklists are a thing of the past!<br>
            Create digitally managed checklists and retrieve information about them digitally and centrally
            across all departments in your organisation.
            We believe that all industries and franchises will grow, and benefit from our compliance software
            checklists.<br>
            Stop worrying about time-consuming slow archaic processes when building, updating, deploying,
            searching, and archiving documents.
            With our cloud-based solutions, you will have everything you need at your fingertips, keeping
            auditors on their toes.</p><br>
        <h2>Value through <span style="color: brown;"> Compliance Management</span></h2>
        <p>When it comes to any business, network or franchise, compliance management ensures adherence to all
            laws, regulations and industry best practice. This is especially true in regards to how businesses
            manage their staff, their facilities, and their management of customer expectations.
            <br> <br>
            While often a grudge purchase, the role of compliance is to make sure that businesses act
            responsibly.

        </p>
        <br>

        <h2>Secure Document Storage and <span style="color: brown;"> Sharing Solutions</span></h2>
        <p>We understand how important it is to keep your document stored safely and correctly, and that you’re
            able to quickly and effectively send them to the necessary people.
            <br><br>
            Our cloud-based platform handles all your document storage needs. With our varying layers of
            security, DHBHAF makes sure all your information is protected with the utmost care and that you are
            able to retrieve, send or share your documents at the click of a button.
            <br><br>
            Never lose a night’s sleep over the security or storage of your documents again.
            BAMS makes sure you can rest easy. If you still have doubts let us put your mind at ease, get in
            touch with us.
        </p>
    </div>
</div>`
document.getElementById("services").classList.add("active");
 document.getElementById("home").classList.remove("active");
 document.getElementById("contact").classList.remove("active");
 document.getElementById("about").classList.remove("active"); 
}

  else if (element == "civil") {
    nav.innerHTML = `
    <div class="civilMain">
        <h2 style="text-align: center;">Civil <span style="color: green;">Mediation</span> Services</h2>
        <div class="container d-flex justify-content-center">
            <div class="civilUp">
                <div class="civilImg"></div>
            </div>
        </div>
        <div class="container mt-4">
            <p>We offer professional mediation services to resolve employment and commercial disputes. The purpose
                is to
                achieve practical outcomes quickly and cost-effectively.<br><br>
                Mediation is fast becoming a pre-requisite for resolving employment and commercial disputes before
                proceeding with litigation in the labour and civil courts. It offers the consideration of creative
                commercial options to resolve disputes which are often beyond a court’s limited legal powers to
                consider.<br><br>

                At Deale Attorneys, we have special expertise in commercial mediation at executive and senior
                management
                levels. Typical disputes involve conflict at Board level amongst Directors or between the Board and
                the
                CEO or other senior executives.</p>
            <h5>Our commercial mediation services include:</h5>
            <h4>Labor <span style="color: brown;"> Disputes</span></h4>
            <p>Social and economic pressures intensify disputes at all levels in our workplaces where livelihoods
                and reputations may be at stake. Differing points of view can seem irreconcilable and lead to
                litigation in court. But time delays, costs, publicity and pure stress of protracted legal action
                are well-known downsides of this traditional system. And court-imposed ‘standard’ remedies are not
                always ideal. More cost-effective and creative methods to find new solutions are needed to resolve
                conflict more quickly to sustain our businesses.

            </p>
            <h4>Commercial <span style="color: brown;"> Disputes</span></h4>
            <p>We provide specialised commercial mediation services. Mediation is a most effective option for
                resolving business disputes because it allows consideration of creative options – often beyond a
                court’s limited legal powers to consider. Commercial mediations are conducted without prejudice to
                legal rights – and in the strictest confidence. The rules promote a climate for constructive
                problem-solving – in private, and without surrendering access to litigation if negotiations do not
                resolve the dispute. This is particularly important where corporate and personal reputations are
                involved, to avoid harmful publicity.

            </p>
            <h4>Multi <span style="color: brown;"> -Party</span></h4>
            <p>Many tough business disagreements can be resolved internally through the intervention of a
                professional Facilitator. We’ve developed ideal processes and special skills to work with business
                parties at all levels – from top executives to representatives in multi-party unionised environments
                – to reach common cause in complex situations. We have facilitated many successful processes in
                early and late stage conflict environments, in a variety of sectors.</p>
        </div>
    </div>

`
document.getElementById("services").classList.add("active");
 document.getElementById("home").classList.remove("active");
 document.getElementById("contact").classList.remove("active");
 document.getElementById("about").classList.remove("active");
}

else if (element == "contact") {
  nav.innerHTML = ` <!-- contact -->
  <div class="contactMain">
     <div class="container d-flex justify-content-center align-items-center">
         <div class="inputs">
             <h2 style="text-align: center; margin-top: 8px;">Contact Us</h2>
             <div class="contact">
                 <input type="text" placeholder="Name">
                 <input type="email" placeholder="E-mail">
                 <input type="text" placeholder="Subject">
                 <input type="textarea" placeholder="Message">
             </div>
            <div style="text-align: center;"> <button type="button" class="btn btn-danger">Submit</button></div>
         </div>
     </div>
 </div>
 
 
 <!-- contact end -->
 `
 document.getElementById("contact").classList.add("active");
 document.getElementById("home").classList.remove("active");
 document.getElementById("services").classList.remove("active");
 document.getElementById("about").classList.remove("active");
}



};


