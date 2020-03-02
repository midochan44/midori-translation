import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="Midori Translation" />
          <h2 class="article">私たちの翻訳サービスについて<span class="subtitle">思い立ったらすぐに頼める翻訳</span></h2>
          <hr />
          </div>
        <h3>翻訳言語</h3>
        <p>
          日本語・英語間の相互翻訳
        </p>
        <h3>翻訳例</h3>
        <p>
          各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳、校正など
        </p>
        <h3> 翻訳資料 </h3>
        <p> 
            翻訳の必要な資料は文書をはじめ、写メ、ビデオ（会話）などの形式での受付も可能です。その他、ご相談ください。
        </p>
        <h3>100%満足保証</h3>
        <p>
          訳語は文書形式でEメールにて納品いたします。お客様にご満足いただけるまで訂正変更します。
        </p>
        <h3>お支払いは安心の後払い</h3>
        <p>
          納品後２週間以内に
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          または銀行振込にてお支払いください。
        </p>
        <p>
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          とは、世界で2億5000万人以上が利用する「安全」で「かんたん」なオンライン決済サービスです。ペイパルでのお支払い手数料は当社が負担しますので、お客様は手数料ゼロでお支払いができます。ペイパルの年会費、登録料は無料です。
        </p>
        <p>銀行振込によるお支払い手数料はお客様のご負担になります。</p>
        <h3>料金</h3>
        <p>
          １０００円からの堅牢料金。令和２年５月末まで<b>２０%オフ</b>。お早めに！
        </p>  
        <h3>お見積り無料</h3>
        <p>
          まずは見積り! 細かいことはその後で。
        </p>
      </div>
    );
  }
}
<div class="box">
  <div>翻訳言語
    <br>日本語・英語間の相互翻訳</br></div>
  <div>翻訳例
    <br> 各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳、校正など </br></div>
  <div>翻訳資料
    <br>翻訳の必要な資料は文書をはじめ、写メ、ビデオ（会話）などの形式での受付も可能です。その他、ご相談ください。</br></div>
  <div>１００％満足保証
    <br>翻訳の必要な資料は文書をはじめ、写メ、ビデオ（会話）などの形式での受付も可能です。その他、ご相談ください。</br></div>
  <div> お支払いは安心の後払い
    <br>納品後２週間以内にペイパル<sup>*1</sup>または銀行振込<sup>*2</sup>にてお支払いください。</br></div>
  <div> 料金 
    <br> １０００円からの堅牢料金。令和２年５月末まで２０%オフ。お早めに！</br></div>
  <div> お見積り無料 
    <br> まずは見積り! 細かいことはその後で。</br></div>
</div>
