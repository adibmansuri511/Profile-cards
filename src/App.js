import "./App.css";

function App() {
  return (
    <>
      <section className="container my-5">
        <main className="row">
          <h1 className="text-light text-center mt-2 mb-4">User Profile Cards</h1>
          <div className="col-md-4">
            <Card
              imgName="demo-img-01"
              imgSrc="user-image/demo-img-01.jpg"
              cardTitle="John Doe"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="HTML + CSS"
              skillBgColor_01="#DD4B25"
              skillTextColor_01="#ffffff"
              emoji_01="&#128170;"
              skillName_02="JavaScript"
              skillBgColor_02="#F7D800"
              skillTextColor_02="#000000"
              emoji_02="&#128170;"
              skillName_03="Web Design"
              skillBgColor_03="#BBD1BB"
              skillTextColor_03="#000000"
              emoji_03="&#128170;"
              skillName_04="Git and GitHub"
              skillBgColor_04="#000000"
              skillTextColor_04="#ffffff"
              emoji_04="&#128118;"
              skillName_05="React"
              skillBgColor_05="#149ECA"
              skillTextColor_05="#000000"
              emoji_05="&#128118;"
              skillName_06="Bootstrap"
              skillBgColor_06="#7952B3"
              skillTextColor_06="#ffffff"
              emoji_06="&#128170;"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgName="demo-img-02"
              imgSrc="user-image/demo-img-02.jpg"
              cardTitle="Matt Anderson"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="NodeJs"
              skillBgColor_01="#026E00"
              skillTextColor_01="#ffffff"
              emoji_01="&#128118;"
              skillName_02="JavaScript"
              skillBgColor_02="#F7D800"
              skillTextColor_02="#000000"
              emoji_02="&#128170;"
              skillName_03="Web Design"
              skillBgColor_03="#BBD1BB"
              skillTextColor_03="#000000"
              emoji_03="&#128170;"
              skillName_04="Angular"
              skillBgColor_04="#C3002F"
              skillTextColor_04="#ffffff"
              emoji_04="&#128118;"
              skillName_05="React"
              skillBgColor_05="#149ECA"
              skillTextColor_05="#000000"
              emoji_05="&#128170;"
              skillName_06="Bootstrap"
              skillBgColor_06="#7952B3"
              skillTextColor_06="#ffffff"
              emoji_06="&#128118;"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgName="demo-img-03"
              imgSrc="user-image/demo-img-03.jpg"
              cardTitle="Kevin White"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="HTML + CSS"
              skillBgColor_01="#DD4B25"
              skillTextColor_01="#ffffff"
              emoji_01="&#128170;"
              skillName_02="JavaScript"
              skillBgColor_02="#F7D800"
              skillTextColor_02="#000000"
              emoji_02="&#128118;"
              skillName_03="Web Design"
              skillBgColor_03="#BBD1BB"
              skillTextColor_03="#000000"
              emoji_03="&#128170;"
              skillName_04="C++"
              skillBgColor_04="#005697"
              skillTextColor_04="#ffffff"
              emoji_04="&#128170;"
              skillName_05="Python"
              skillBgColor_05="#366B98"
              skillTextColor_05="#ffffff"
              emoji_05="&#128118;"
              skillName_06="Tailwind"
              skillBgColor_06="#36B7F0"
              skillTextColor_06="#ffffff"
              emoji_06="&#128170;"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgName="demo-img-04"
              imgSrc="user-image/demo-img-04.jpg"
              cardTitle="Alex Taylor"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="MongoDB"
              skillBgColor_01="#00E661"
              skillTextColor_01="#00000"
              emoji_01="&#128170;"
              skillName_02="NextJs"
              skillBgColor_02="#000000"
              skillTextColor_02="#ffffff"
              emoji_02="&#128170;"
              skillName_03="NodeJs"
              skillBgColor_03="#026E00"
              skillTextColor_03="#ffffff"
              emoji_03="&#128170;"
              skillName_04="Remix"
              skillBgColor_04="#000000"
              skillTextColor_04="#ffffff"
              emoji_04="&#128170;"
              skillName_05="Python"
              skillBgColor_05="#366B98"
              skillTextColor_05="#ffffff"
              emoji_05="&#128118;"
              skillName_06="Tailwind"
              skillBgColor_06="#36B7F0"
              skillTextColor_06="#ffffff"
              emoji_06="&#128170;"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgName="demo-img-05"
              imgSrc="user-image/demo-img-05.jpg"
              cardTitle="David Johnson"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="VueJs"
              skillBgColor_01="#32475B"
              skillTextColor_01="#ffffff"
              emoji_01="&#128118;"
              skillName_02="Svelte"
              skillBgColor_02="#F73C00"
              skillTextColor_02="#ffffff"
              emoji_02="&#128118;"
              skillName_03="MySql"
              skillBgColor_03="#00758F"
              skillTextColor_03="#ffffff"
              emoji_03="&#128170;"
              skillName_04="PHP"
              skillBgColor_04="#4F5B93"
              skillTextColor_04="#ffffff"
              emoji_04="&#128170;"
              skillName_05="Laravel"
              skillBgColor_05="#F72C1F"
              skillTextColor_05="#ffffff"
              emoji_05="&#128118;"
              skillName_06="CodeIgniter"
              skillBgColor_06="#E74222"
              skillTextColor_06="#ffffff"
              emoji_06="&#128170;"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgName="demo-img-06"
              imgSrc="user-image/demo-img-06.jpg"
              cardTitle="Brian Davis"
              cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              skillName_01="HTML + CSS"
              skillBgColor_01="#254BDD"
              skillTextColor_01="#ffffff"
              emoji_01="&#128170;"
              skillName_02="JavaScript"
              skillBgColor_02="#F7D800"
              skillTextColor_02="#000000"
              emoji_02="&#128170;"
              skillName_03="React"
              skillBgColor_03="#149ECA"
              skillTextColor_03="#000000"
              emoji_03="&#128170;"
              skillName_04="NextJs"
              skillBgColor_04="#000000"
              skillTextColor_04="#ffffff"
              emoji_04="&#128118;"
              skillName_05="NodeJs"
              skillBgColor_05="#026E00"
              skillTextColor_05="#ffffff"
              emoji_05="&#128118;"
              skillName_06="MongoDB"
              skillBgColor_06="#00E661"
              skillTextColor_06="#00000"
              emoji_06="&#128118;"
            />
          </div>
        </main>
      </section>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="card text-light card-shadow border-0 rounded-5 my-3 mx-2">
        <Avatar name={props.imgName} source={props.imgSrc} />

        <div className="card-body card-body-bg-color rounded-bottom-5">
          <Intro title={props.cardTitle} text={props.cardText} />

          <SkillList
            skill_01={[
              props.skillName_01,
              props.skillTextColor_01,
              props.skillBgColor_01,
              props.emoji_01,
            ]}
            skill_02={[
              props.skillName_02,
              props.skillTextColor_02,
              props.skillBgColor_02,
              props.emoji_02,
            ]}
            skill_03={[
              props.skillName_03,
              props.skillTextColor_03,
              props.skillBgColor_03,
              props.emoji_03,
            ]}
            skill_04={[
              props.skillName_04,
              props.skillTextColor_04,
              props.skillBgColor_04,
              props.emoji_04,
            ]}
            skill_05={[
              props.skillName_05,
              props.skillTextColor_05,
              props.skillBgColor_05,
              props.emoji_05,
            ]}
            skill_06={[
              props.skillName_06,
              props.skillTextColor_06,
              props.skillBgColor_06,
              props.emoji_06,
            ]}
          />
        </div>
      </div>
    </>
  );
}

function Avatar(props) {
  return (
    <>
      <img
        style={{ height: "225px" }}
        src={props.source}
        className="card-img-top"
        alt={props.name}
      />
    </>
  );
}

function Intro(props) {
  return (
    <>
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
    </>
  );
}

function SkillList(props) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-start align-item-center skill-list">
        <div
          className="skill"
          style={{
            color: props.skill_01[1],
            backgroundColor: props.skill_01[2],
          }}
        >
          {props.skill_01[0]}
          <span> {props.skill_01[3]}</span>
        </div>

        <div
          className="skill"
          style={{
            color: props.skill_02[1],
            backgroundColor: props.skill_02[2],
          }}
        >
          {props.skill_02[0]}
          <span> {props.skill_02[3]}</span>
        </div>

        <div
          className="skill"
          style={{
            color: props.skill_03[1],
            backgroundColor: props.skill_03[2],
          }}
        >
          {props.skill_03[0]}
          <span> {props.skill_03[3]}</span>
        </div>

        <div
          className="skill"
          style={{
            color: props.skill_04[1],
            backgroundColor: props.skill_04[2],
          }}
        >
          {props.skill_04[0]}
          <span> {props.skill_04[3]}</span>
        </div>

        <div
          className="skill"
          style={{
            color: props.skill_05[1],
            backgroundColor: props.skill_05[2],
          }}
        >
          {props.skill_05[0]}
          <span> {props.skill_05[3]}</span>
        </div>

        <div
          className="skill"
          style={{
            color: props.skill_06[1],
            backgroundColor: props.skill_06[2],
          }}
        >
          {props.skill_06[0]}
          <span> {props.skill_06[3]}</span>
        </div>
      </div>
    </>
  );
}

export default App;
