// GoogleTranslate.js
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,de,it,zh-CN,ar,hi,ru", // Add more languages as needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  return (
    <div id="google_translate_element" style={{ marginLeft: "10px" }} />
  );
};

export default GoogleTranslate;
