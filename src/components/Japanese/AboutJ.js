import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutJ extends React.Component {
  render() {
    return (
      <div>
        <h2>私たちについて</h2>
        <hr />
        <div className="about">
          <img src={kayImg} alt="Kayoko Bossiere" />
          <div className="row japanese">
            <div className="col-12">
              <h4>ボシエール 香代子</h4>
              <p>
                １８年間ロサンゼルスにて、三人の子育てをするかたわら夫の経営する会社
                <a href="http://www.shiningprince.com/" target="a">
                  Shining Prince Entertainment
                </a>
                で翻訳などに携わった後、近年本拠を日本に移す。アメリカで培った経験をもとにお客様にご満足いただけるサービスを心掛けています。Toeic
                スコア：875
              </p>
            </div>
          </div>
          <div className="row japanese">
            <div className="col-12">
              <h4>ボシエール ジェフリー</h4>
              <p>
                国際的な企業を顧客に映画、ITビジネス関連のコンサルタント会社
                <a href="http://www.shiningprince.com/" target="a">
                  Shining Prince Entertainment
                </a>
                を経営する。UCLA 経営学部大学院卒。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
