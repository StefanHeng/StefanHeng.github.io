---
permalink: /projects

title: ""
classes: wide

# author_profile: false


expEntries:
  PeftU:
    id: "PeftU"
    name: "Parameter-Efficient Personalization"
    time: "May. 2023 - Present"
    loc: "UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/ChrisIsKing/Parameter-Efficient-Personalization"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "In collaboration with [Christopher Clarke](https://scholar.google.com/citations?user=IaFEAbsAAAAJ&hl=en) at [CLARITY lab](https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/) "
          - "To improve performance on subjective classification tasks"
          - "Conducted literature search, Added subjective dataset on irony"
          - "Built [PEFT](https://huggingface.co/docs/peft/index), [Adapter](https://docs.adapterhub.ml) and [Personalized Head](https://stefanheng.github.io/projects#PiDset) training & evaluation pipelines and conducting experiments "
  PiDset:
    id: "PiDset"
    name: "Personalized Text Classification Dataset"
    time: "Jul. 2022 - Oct. 2022"
    loc: "UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Personalized-Productivity-Dataset"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "In collaboration with [Yiping Kang](https://ypkang.github.io), [Ashish Mahendra](https://github.com/AshishMahendra) at [CLARITY lab](https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/) "
          - "Built dataset with timestamped & changing label set for personalized text classification "
          - "Processed in-production user data from [Myca](https://www.myca.ai) productivity tool "
          - "Implemented and conducted experiments for personalization paper in submission "
  BiEnc:
    id: "BiEnc"
    name: "Heterogeneous Bi-Encoder"
    time: "Jul. 2022"
    loc: "UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/AshishMahendra/non-siamese-bi-encoders"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "In collaboration with [Ashish Mahendra](https://github.com/AshishMahendra) at [CLARITY lab](https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/) "
          - "Investigated independent context and candidate encoders for intent classification "
          - "Advised on implementation and experiments and edited the paper in submission ACL 2022 "
  ZSTC:
    id: "ZSTC"
    name: "Zero-Shot Text Classification"
    time: "Feb. 2022 - Jun. 2022"
    loc: "UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/ChrisIsKing/Zero-shot-text-classification"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Mentored by [Christopher Clarke](https://scholar.google.com/citations?user=IaFEAbsAAAAJ&hl=en) at [CLARITY lab](https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/) "
          - "Investigated zero-shot classification frameworks; Proposed novel training strategies "
          - "Re-implemented GPT-2 generative framework; Built training & evaluation pipelines and conducted experiments "
          - "Designed illustrations for and wrote sections in ACL 2023 publication "
        media:
          - src: "https://i.imgur.com/NkmQCG1.png"
            alt: "Training Strategies Illustration "
            cap: "Proposed Training Strategies that inject dataset aspect knowledge"
          - src: "https://i.imgur.com/MGs7RvT.png"
            alt: "Out of Domain Vanilla training plot"
            cap: "Out-of-Domain Architecture performances"
          - src: "https://i.imgur.com/HVyet5R.png"
            alt: "In-Domain/Out-of-domain label overlap"
            cap: "In-Domain/Out-of-domain label overlap correlates with performance"
  MNLP:
    id: "MNLP"
    logo: "/assets/images/lmt-logo.svg"
    name: "Symbolic Music Generation"
    time: "Oct. 2021 - Present"
    loc: "UMich"
    locLink: "https://lit.eecs.umich.edu"
    tags:
      - txt: "Python"
      - txt: "MuseScore"
      - txt: "music21"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Symbolic-Music-Generation"
        ic: "fas fa-code"
      - txt: "Samples"
        link: "https://github.com/StefanHeng/Symbolic-Music-Generation/tree/master/generated-samples"
        ic: "fas fa-music"
    sets:
      - bullets:
          - "Mentored by [Artem Abzaliev](http://artem.site44.com) at [Language & Information Technologies](https://lit.eecs.umich.edu) "
          - "Designing music-theory-inspired compact music representation through melody and bass extraction, for Language-Modeling-based music generation "
          - "Processed 10k+ music files; Conducting experiments with Transformer-XL and Reformer "
        media:
          - src: "https://i.imgur.com/NZ9BxDn.png"
            alt: "Example input song"
            cap: "Example input song: *Merry Go Round of Life* by *Joe Hisaishi*"
          - src: "https://i.imgur.com/lw7L1Oy.png"
            alt: "Example melody & bass extraction output"
            cap: "Example melody & bass extraction output: *Merry Go Round of Life* by *Joe Hisaishi*"
  EBAY:
    id: "EBAY"
    name: "Front-end Software Engineer Intern"
    time: "May. 2021 - Jul. 2021"
    loc: "eBay (remote)"
    locLink: "https://www.ebay.com"
    tags:
      - txt: "Marko"
      - txt: "JavaScript"
      - txt: "LESS"
      - txt: "Node.js"
      - txt: "Redux"
    sets:
      - bullets:
        - "Mentored by [Wei Don](https://www.linkedin.com/in/don-wei/) and Srini at Seller Experience team "
        - "Developed workflow for video upload in item listing tool "
        - "Got an return offer! "
  ECG:
    id: "ECG"
    name: "ECG Signal Processing Researcher"
    time: "Sep. 2020 - Apr. 2022"
    loc: "UROP @ UMich"
    locLink: "https://lsa.umich.edu/urop"
    tags:
      - txt: "Python"
      - txt: "Dash"
      - txt: "MATLAB"
      - txt: "Code"
        link: "https://github.com/StefanHeng/test_ECG-Signal-Viewer"
        ic: "fas fa-code"
      - txt: "Code"
        link: "https://github.com/StefanHeng/ECG-PVC-Classifier"
        ic: "fas fa-code"
      - txt: "Code"
        link: "https://github.com/StefanHeng/ECG-Representation-Learning"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Mentored by [Dr. Mohammed Saeed](https://mcircc.umich.edu/members/mohammed-saeed-md-phd) at Michigan Medicine "
          - "Built a [Dash](https://plotly.com/dash/)-based web app for viewing & annotating heart ECG signals "
        media:
          - src: "https://i.imgur.com/Uc7y2gC.png"
            alt: "A screenshot of the tool developed"
            cap: "ECG Visualization & Annotation tool snapshot"
      - bullets:
          - "Proposed self-supervised ECG representation learning, inspired by NLP and vision pre-training"
          - "Compiled 50K+ 12-lead ECG records based on publicly-available datasets"
          - "Implemented Vision Transformer for ECG classification"
        media:
          # - src: "https://i.imgur.com/6W1P7iF.png"
          #   alt: "ECG segment Birch Clustering, frequency plot"
          # - src: "https://i.imgur.com/gSHFYGB.png"
          #   alt: "ECG segment Birch Clustering, cluster center visualization"
          - src: "https://i.imgur.com/keIr7fN.png"
            alt: "ECG ViT Attention Map on a challenging ECG sample"
            cap: "ECG ViT Attention Map on a challenging ECG sample"
          - src: "https://i.imgur.com/XVZdNv4.png"
            alt: "ECG ViT classification performance"
            cap: "ECG ViT supervised classification performance on PTB-XL dataset"
  Robot:
    id: "Robot"
    name: "Multi-Robot Collaboration Researcher"
    time: "Sep. 2021 - Dec. 2021"
    loc: "MDP @ UMich"
    locLink: "https://mdp.engin.umich.edu"
    tags:
      - txt: "Python"
      - txt: "ROS"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Multi-robot-Pose-Estimation"
        ic: "fas fa-code"
      - txt: "Final report"
        link: "https://drive.google.com/file/d/1iJ5H4kr64rnm6v06gjXiZAUbz8xSi0rQ/view?usp=sharing"
        ic: "far fa-file-alt"
    sets:
      - bullets:
          - "Mentored by [Tyler Toner](https://brg.engin.umich.edu/people/) at [Barton Research Group](https://brg.engin.umich.edu) "
          - "\"How to get the relative pose between two robots directly (as opposed to global positioning), exploiting capacity of both robots?\" "
        media:
          - src: "https://i.imgur.com/362Can8.png"
            alt: "HSR laser scan with KUKA in range"
            cap: "HSR Robot laser scan with KUKA robot detected"
          - src: "https://i.imgur.com/dOTIoru.png"
            alt: "Exhaustive search on global optimum pose"
            cap: "Exhaustive search heatmap illustrating likely relative pose"
          - src: "https://i.imgur.com/Bc7he4M.png"
            alt: "Good ICP output given good translation guess, with switched input"
            cap: "ICP output when initialized with close robot translation guess"
  PdM:
    id: "PdM"
    name: "Predictive Maintenance Portability Researcher"
    time: "Jan. 2021 - Apr. 2021"
    loc: "MDP @ UMich"
    locLink: "https://mdp.engin.umich.edu"
    tags:
      - txt: "Python"
      - txt: "MATLAB"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Bearing-Prediction-Portability"
        ic: "fas fa-code"
      - txt: "Final report"
        link: "https://drive.google.com/file/d/1iIVxVUF88lDgJvoEh-kfEueUPisKlxVn/view?usp=sharing"
        ic: "far fa-file-alt"
    sets:
      - bullets:
          - "Mentored by [Max Toothman](https://brg.engin.umich.edu/people/) at [Barton Research Group](https://brg.engin.umich.edu) "
          - "\"Does the prior failure prediction approach generalize well to similar bearing systems?\" "
        media:
          - src: "https://i.imgur.com/8phq403.png"
            alt: "Previous model idea"
            cap: "Credit: previous student Yuntian Zhao"
          - src: "https://i.imgur.com/X0YBXib.png"
            alt: "Normality check for degrading indicator"
            cap: "Check for normality on degrading indicator: Frequency at maximum amplitude"
          - src: "https://i.imgur.com/dZeBOhq.png"
            alt: "A degenerate case on degradation detection"
            cap: "Illustration on moving window for degradation detection"
  OPTN:
    id: "OPTN"
    name: "UX/UI Designer & Developer Intern"
    time: "Mar. 2020 - May 2020"
    loc: "OpptIn (Startup) @ Scranton, PA (remote)"
    locLink: "https://www.opptin.com"
    tags:
      - txt: "UX/UI Design"
      - txt: "Graphic Design"
      - txt: "XML"
      - txt: "JAVA"
    sets:
      - bullets:
          - "Brianstormed UI framework with functional widgets to augment location-specific spaces"
          - "Iterated company logo design"
          - "Implemented Android layouts"
        # media:
        #   - src: "https://i.imgur.com/VtXeq7i.png"
        #     alt: "Mobile space home page, design prototype"
        #   - src: "https://i.imgur.com/qfo2JTN.png"
        #     alt: "Location-inspired logo ideas"
  BENG:
    id: "BENG"
    name: "Bioengineering Imaging Research Assistant"
    time: "May. 2019 - Jul. 2019"
    loc: "AJC @ UMD"
    locLink: "https://eng.umd.edu"
    tags:
      - txt: "Python"
    sets:
      - bullets:
          - "Mentored by Prof. [Yu Chen](https://bbi.umd.edu/clark/faculty/371/Yu-Chen) and Xi Qin "
          - "Collaborated in a group of 6 on refining kidney tubule segmentation annotations "
          - "Studied image texture analysis and segmentation to better differentiate imaging noise "
      - media:
          - src: "https://i.imgur.com/TkBXQdh.png"
            alt: "Law's texture analysis on kidney segmentation imaging"
            cap: "Law's texture analysis output on a kidney imaging sample"
  FIRE:
    id: "FIRE"
    name: "Art Museum Experience Researcher & Mentor"
    time: "Apr. 2019 - May 2020"
    loc: "FIRE @ UMD"
    locLink: "https://www.fire.umd.edu"
    tags:
      - txt: "Augmented Reality"
      - txt: "Android"
      - txt: "Blender"
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Visualization-of-Color-Theory-3.0"
        ic: "fas fa-code"
      - txt: "Final report"
        link: "https://drive.google.com/file/d/1EIvLS_hZi8ZdOsr07P1dImNUmR-VRysp/view?usp=sharing"
        ic: "far fa-file-alt"
    sets:
      - bullets:
          - "Mentored by Prof. Kyungjin Yoo. "
          - "Developed an [ARCore](https://developers.google.com/ar)-based Android app that renders art museum paintings in various colors "
        media:
          - isVideo: true
            vid: "ptJVrSIxkDs"
          - src: "https://i.imgur.com/1DLlZvF.jpg"
            alt: "Fire Summit 2019"
            cap: "Fire Summit, Summer 2019 with organizer! "
      - bullets:
          - "Mentored group of 30+ on VR, AR location technologies training and on research proposals "
  SOLD:
    id: "SOLD"
    name: "Soldier Intelligence Trainer"
    time: "Nov. 2018 - Feb. 2019"
    loc: "UMD"
    locLink: "https://www.umd.edu"
    tags:
      - txt: "Java"
    sets:
      - bullets:
        - "Participated in [Prof. Fawzi Emad](https://www.cs.umd.edu/people/fpe)'s course challenge about AI soldiers in a 2D grid battlefield"
        - "Implemented genetic search for neural network"
      - media:
          - src: "https://i.imgur.com/ve7GaIb.png"
            alt: "Soldiers fighting themselves during training"
            cap: "Soldier self-learning by fighting with itself"
---
{% include title-script.html title="Projects | Stefan Heng" %}





# Research & Working Experience

{% include exp-entry.html id="PeftU" %}
{% include exp-entry.html id="PiDset" %}
{% include exp-entry.html id="MNLP" %}
{% include exp-entry.html id="BiEnc" %}
{% include exp-entry.html id="ZSTC" %}
{% include exp-entry.html id="Robot" %}
{% include exp-entry.html id="ECG" %}
{% include exp-entry.html id="EBAY" %}
{% include exp-entry.html id="PdM" %}
{% include exp-entry.html id="OPTN" %}
{% include exp-entry.html id="BENG" %}
{% include exp-entry.html id="FIRE" %}
{% include exp-entry.html id="SOLD" %}

<br>




