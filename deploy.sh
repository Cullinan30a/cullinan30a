#!/bin/bash
echo "=== DEPLOYING v6.7 ==="
cd /Users/hudsonmar/Documents/GitHub/cullinan30a
git add index.html abc_test.html
git commit -m "🎙️ feat(speech-sandbox): Add Speech Sandbox v6.7 with Cantonese TTS

- abc_test.html: Complete overwrite with Speech Sandbox v6.7
- Features: Two-column text input for professional vs warm tone
- Cantonese (zh-HK) speech synthesis with voice selection
- Adjustable rate, pitch, and emotion presets
- Smart text chunking by punctuation and line breaks
- Copy text and play audio functionality
- index.html: Added Speech Sandbox link to navigation
- Version bump: v6.6 → v6.7"
git push origin main
echo "=== DEPLOYMENT COMPLETE ==="

宏伴護航危疾入息保障，
就係希望喺呢啲時候，
成為你背後嘅支撐。

佢唔單止會喺你患上嚴重疾病時，
提供一次賠償，
仲可以多次索償，
涵蓋癌症，
心臟病，
中風等多種高風險疾病。

如果你需要長時間康復，
保費仲會自動豁免，
保障繼續生效，
唔使擔心中途停止。

因為我知道，
當你專心養好身體嘅時候，
冇咗經濟壓力，
先可以真正安心。

呢份保障，
唔只係保單上嘅條款，
佢係一份真心守護，
令你同家人，
繼續向前。</textarea>
        </div>
      </div>

      <div class="row" style="margin-top:18px">
        <div class="pill"><span class="muted">🎚 聲線</span>
          <select id="voiceSelect"><option>載入中…</option></select>
        </div>
        <div class="pill"><span class="muted">⏱ 語速</span>
          <input id="rate" type="range" min="0.6" max="1.6" step="0.05" value="1.05"/>
        </div>
        <div class="pill"><span class="muted">🎵 音高</span>
          <input id="pitch" type="range" min="0.7" max="1.6" step="0.05" value="1.05"/>
        </div>
        <button id="apply" class="warn">更新到頁面</button>
        <button id="stopAll" class="secondary">■ 全部停止</button>
      </div>
      <div class="row">
        <span class="tag">優先使用 zh‑HK 聲線</span>
        <span class="tag">自動分句：逗號/句號/換行</span>
        <span class="tag">行動觸發才能發聲（瀏覽器限制）</span>
      </div>
    </div>

    <!-- Output cards -->
    <div class="grid" style="margin-top:18px">
      <div class="card">
        <h3>Option 1（專業＋震撼）</h3>
        <div class="row">
          <button id="play1">▶ 播放</button>
          <button id="preset1" class="secondary">⚡ 情緒預設：專業＋震撼</button>
          <button id="copy1" class="secondary">⧉ 複製全文</button>
        </div>
        <div id="out1" class="scr"></div>
      </div>
      <div class="card">
        <h3>Option 2（溫暖＋關懷）</h3>
        <div class="row">
          <button id="play2">▶ 播放</button>
          <button id="preset2" class="secondary">💛 情緒預設：溫暖＋關懷</button>
          <button id="copy2" class="secondary">⧉ 複製全文</button>
        </div>
        <div id="out2" class="scr"></div>
      </div>
    </div>
  </div>

  <script>
    const $ = s => document.querySelector(s);
    const voicesState = { voices: [] };

    function splitIntoChunks(text) {
      return text
        .split(/(?<=[，、。！？\n])/)
        .map(s => s.trim())
        .filter(Boolean);
    }

    function populateVoices() {
      const select = $('#voiceSelect');
      const all = speechSynthesis.getVoices();
      voicesState.voices = all;

      const preferred = all.filter(v =>
        /zh/i.test(v.lang) && /(HK|Hant)/i.test(v.lang) || /yue|canton/i.test(v.name)
      );

      const list = preferred.length ? preferred : all;
      select.innerHTML = '';
      list.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.textContent = `${v.name}  ·  ${v.lang}`;
        select.appendChild(opt);
      });
    }

    function pickVoiceByName(name) {
      return voicesState.voices.find(v => v.name === name) || null;
    }

    function stopAll() {
      speechSynthesis.cancel();
    }

    function speakText(text, { rate=1.05, pitch=1.05, voice=null } = {}) {
      stopAll();
      const chunks = splitIntoChunks(text);
      let i = 0;

      function speakNext() {
        if (i >= chunks.length) return;
        const u = new SpeechSynthesisUtterance(chunks[i]);
        if (voice) u.voice = voice;
        u.lang = (voice && voice.lang) || 'zh-HK';
        u.rate = rate;
        u.pitch = pitch;
        u.onend = () => { i++; speakNext(); };
        speechSynthesis.speak(u);
      }
      speakNext();
    }

    function applyToPage() {
      $('#out1').textContent = $('#input1').value.trim();
      $('#out2').textContent = $('#input2').value.trim();
    }

    function copyText(elId) {
      const text = $(elId).textContent;
      navigator.clipboard.writeText(text);
    }

    function presetProfessional() {
      $('#rate').value = 1.15;
      $('#pitch').value = 1.0;
    }
    function presetWarm() {
      $('#rate').value = 0.92;
      $('#pitch').value = 1.18;
    }

    $('#apply').addEventListener('click', applyToPage);
    $('#stopAll').addEventListener('click', stopAll);
    $('#copy1').addEventListener('click', () => copyText('#out1'));
    $('#copy2').addEventListener('click', () => copyText('#out2'));
    $('#preset1').addEventListener('click', presetProfessional);
    $('#preset2').addEventListener('click', presetWarm);

    $('#play1').addEventListener('click', () => {
      const voice = pickVoiceByName($('#voiceSelect').value);
      speakText($('#out1').textContent, {
        rate: parseFloat($('#rate').value),
        pitch: parseFloat($('#pitch').value),
        voice
      });
    });

    $('#play2').addEventListener('click', () => {
      const voice = pickVoiceByName($('#voiceSelect').value);
      speakText($('#out2').textContent, {
        rate: parseFloat($('#rate').value),
        pitch: parseFloat($('#pitch').value),
        voice
      });
    });

    if ('speechSynthesis' in window) {
      speechSynthesis.onvoiceschanged = populateVoices;
      populateVoices();
    } else {
      $('#voiceSelect').innerHTML = '<option>此瀏覽器不支援語音合成</option>';
    }
    applyToPage();
  </script>
</body>
</html>
