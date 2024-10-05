---
permalink: /publications

title: ""
classes: wide

# author_profile: false


pubEntries:
  ProgGen:
    id: "ProgGen"
    title: "ProgGen: Generating Named Entity Recognition Datasets Step-by-step with Self-Reflexive Large Language Models"
    tags:
      # - txt: "Conference"
      - txt: "arXiv"
        link: "https://arxiv.org/abs/2403.11103"
        ic: "fas fa-file-pdf"
      - txt: "Conference"
        link: "https://aclanthology.org/2024.findings-acl.947/"
        ic: "fa-solid fa-users-line"
      # - txt: "BibTex"
      #   link: ""
      #   ic: "fa-solid fa-file-lines"®
      - txt: "GitHub"
        link: "https://github.com/StefanHeng/ProgGen"
        ic: "fas fa-code"
      - txt: "role"
        link: "https://stefanheng.github.io/projects#ProgGen"
    authors: "<u>Yuzhao Heng</u>, Chunyuan Deng, Yitong Li, Yue Yu, Yinghao Li, Rongzhi Zhang and Chao Zhang"
    venue: "Annual Meeting of the Association for Computational Linguistics (ACL) Findings, 2024"
    desc: "We introduce a stage-wise framework that generates diverse and accurate NER training datasets given only under 10 annotated instances. On 4 datasets we experiment on, DeBERTa models fine-tuned on the generated datasets out-perform/perform similarly to GPT-3.5 few-shot prompting. "
    images:
      - src: "https://i.imgur.com/q31GrUD.png"
        alt: "ProgGen workflow illustration "
  DataCon:
    id: "DataCon"
    title: "Unveiling the Spectrum of Data Contamination in Language Model: A Survey from Detection to Remediation"
    tags:
      # - txt: "Conference"
      - txt: "arXiv"
        link: "https://arxiv.org/abs/2406.14644"
        ic: "fas fa-file-pdf"
      - txt: "Conference"
        link: "https://aclanthology.org/2024.findings-acl.951/"
        ic: "fa-solid fa-users-line"
      # - txt: "BibTex"
      #   link: ""
      #   ic: "fa-solid fa-file-lines"
      # - txt: "Project Page"
        # link: "https://github.com/StefanHeng/ProgGen"
        # ic: "fas fa-code"
      # - txt: "role"
        # link: "https://stefanheng.github.io/projects#ProgGen"
    authors: "Chunyuan Deng, Yilun Zhao, <u>Yuzhao Heng</u>, Yitong Li, Jiannan Cao, Xiangru Tang, Arman Cohan"
    venue: "Annual Meeting of the Association for Computational Linguistics (ACL) Findings, 2024"
    images:
      - src: "https://i.imgur.com/gLVnNR1.png"
        alt: "Data Contamination basic illustration "
  PeftU:
    id: "PeftU"
    title: "PEFT-U: Parameter-Efficient Fine-Tuning for User Personalization"
    tags:
      - txt: "arXiv"
        link: "https://arxiv.org/abs/2407.18078"
        ic: "fas fa-file-pdf"
      # - txt: "Conference"
        # link: "https://aclanthology.org/2023.findings-acl.64/"
        # ic: "fa-solid fa-users-line"
      # - txt: "BibTex"
      #   link: ""
      #   ic: "fa-solid fa-file-lines"
      - txt: "GitHub"
        link: "https://github.com/ChrisIsKing/Parameter-Efficient-Personalization"
        ic: "fas fa-code"
      - txt: "role"
        link: "https://stefanheng.github.io/projects#PeftU"
    authors: "Christopher Clarke, <u>Yuzhao Heng</u>, Lingjia Tang and Jason Mars"
    # venue: "Findings of the Association for Computational Linguistics (ACL), 2023"
    desc: "We compile a benchmark of subjective text classification tasks for personalization, where user preferences may differ for the same input. The benchmark contains 11 datasets spanning hate-speech, sentiment and humor, with high inter-annotator disagreement. "
  ZsCls:
    id: "ZsCls"
    title: "Label Agnostic Pre-training for Zero-shot Text Classification"
    tags:
      - txt: "arXiv"
        link: "https://arxiv.org/abs/2305.16521"
        ic: "fas fa-file-pdf"
      - txt: "Conference"
        link: "https://aclanthology.org/2023.findings-acl.64/"
        ic: "fa-solid fa-users-line"
      # - txt: "BibTex"
      #   link: ""
      #   ic: "fa-solid fa-file-lines"
      - txt: "GitHub"
        link: "https://github.com/ChrisIsKing/zero-shot-text-classification"
        ic: "fas fa-code"
      - txt: "role"
        link: "https://stefanheng.github.io/projects#ZSTC"
    authors: "Christopher Clarke, <u>Yuzhao Heng</u>, Yiping Kang, Krisztian Flautner, Lingjia Tang and Jason Mars"
    venue: "Annual Meeting of the Association for Computational Linguistics (ACL) Findings, 2023"
    desc: "We benchmark 3 transformer zero-shot text classification paradigms (cross-encoding, dual-encoding, generative) on 18 classification datasets among 3 domains with unseen labels during training. We found that integrating the dataset domain into training improves accuracy by 1% on average."
    images:
      - src: "https://i.imgur.com/NkmQCG1.png"
        alt: "Training Strategies Illustration "


---
{% include title-script.html title="Publications | Stefan Heng" %}


# Publications

## Conference Proceedings

{% include pub-entry.html id="ProgGen" %}
{% include pub-entry.html id="DataCon" %}
{% include pub-entry.html id="ZsCls" %}

<br>


## Preprints

{% include pub-entry.html id="PeftU" %}

<br>




