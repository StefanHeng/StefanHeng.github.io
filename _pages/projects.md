---
permalink: /projects

title: ""
classes: wide

# author_profile: false


expEntries:
  ProgGen:
    id: "ProgGen"
    name: "LLM as NER Data Generator"
    time: "Sep. 2023 - Mar. 2024"
    loc: "Prof. Chao Zhang's group @ GaTech"
    locLink: "http://chaozhang.org"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/StefanHeng/ProgGen"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Investigated Named Entity Recognition (NER) training dataset generation with LLMs focused on diversity and annotation quality "
          - "Built stage-wise prompting and data processing pipeline with parallel OpenAI API "
          - "Inspected generated samples and compared multiple paradigms for annotation feedback and LLM self-correction "
        media:
          - src: "https://i.imgur.com/q31GrUD.png"
            alt: "ProgGen workflow illustration "
            cap: "Step-wise data generation workflow"
  PeftU:
    id: "PeftU"
    name: "Parameter-Efficient Personalization"
    time: "May. 2023 - Dec. 2023"
    loc: "CLARITY lab @ UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/ChrisIsKing/Parameter-Efficient-Personalization"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Collaborated with [Christopher Clarke](https://scholar.google.com/citations?user=IaFEAbsAAAAJ&hl=en) "
          - "Exploring effective and storage-efficient methods for subjective text classification tasks and personalization "
          - "Surveyed literature & Added subjective dataset on irony"
          - "Built & ran [PEFT](https://huggingface.co/docs/peft/index), [Adapter](https://docs.adapterhub.ml) and [Personalized Head](https://stefanheng.github.io/projects#PiDset) modules and training & evaluation pipelines on Flan-T5 "
  PiDset:
    id: "PiDset"
    name: "Personalized Text Classification Dataset"
    time: "Jul. 2022 - Oct. 2022"
    loc: "CLARITY lab @ UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/StefanHeng/Personalized-Productivity-Dataset"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Collaborated with [Yiping Kang](https://ypkang.github.io) & [Ashish Mahendra](https://github.com/AshishMahendra) "
          - "Built text classification dataset with changing label sets overtime for personalized text classification "
          - "Processed in-production user data from [Myca](https://www.myca.ai) productivity tool "
          - "Implemented and conducted experiments for personalization paper "
  BiEnc:
    id: "BiEnc"
    name: "Heterogeneous Bi-Encoder"
    time: "Jul. 2022"
    loc: "CLARITY lab @ UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/AshishMahendra/non-siamese-bi-encoders"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Collaborated with [Ashish Mahendra](https://github.com/AshishMahendra) "
          - "Investigated independent context and candidate encoders for intent classification "
          - "Provided feedback on architecture implementation and experiments; Wrote sections of and edited paper submission "
  ZSTC:
    id: "ZSTC"
    name: "Zero-Shot Text Classification"
    time: "Feb. 2022 - Jun. 2022"
    loc: "CLARITY lab @ UMich"
    locLink: "https://www.jasonmars.org/2014/03/20/clarity-lab-at-university-of-michigan/"
    tags:
      - txt: "Python"
      - txt: "Code"
        link: "https://github.com/ChrisIsKing/Zero-shot-text-classification"
        ic: "fas fa-code"
    sets:
      - bullets:
          - "Collaborated with [Christopher Clarke](https://scholar.google.com/citations?user=IaFEAbsAAAAJ&hl=en) "
          - "Compared zero-shot classification frameworks and and improved classifier training conditioned on dataset domain "
          - "Re-implemented a GPT-2-based 0-shot classification method from prior paper; Built training & eval pipelines & ran experiments "
          - "Designed illustrations and wrote sections for paper submission "
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
    time: "Oct. 2021 - Feb. 2023"
    loc: "LIT @ UMich"
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
          - "Mentored by [Artem Abzaliev](http://artem.site44.com) "
          - "Designed and coded a music token representation that is compact to handle long song sequences and integrates music theory annotations "
          - "Batched and concurrently processed 10K+ MIDI music files; Modified Transformer-XL & Reformer architectures for music sequences "
          - "Designed music-specific metrics for evaluation; Inspected generated music pieces "
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
    loc: "Seller Experience team @ eBay (remote)"
    locLink: "https://www.ebay.com"
    tags:
      - txt: "Marko"
      - txt: "JavaScript"
      - txt: "LESS"
      - txt: "Node.js"
      - txt: "Redux"
    sets:
      - bullets:
        - "Mentored by [Wei Don](https://www.linkedin.com/in/don-wei/) and Srini "
        - "Built front-end groundwork for video uploading features in item listing tool (a tool all eBay sellers interface with) "
        - "Presented architecture, implementation, upstream service challenges & next steps and live demoed to internal team of 40+"
        - "Got an return offer! "
  ECG:
    id: "ECG"
    name: "ECG Signal Processing Researcher"
    time: "Sep. 2020 - Apr. 2022"
    loc: "Michigan Medicine @ UMich"
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
          - "Mentored by [Dr. Mohammed Saeed](https://mcircc.umich.edu/members/mohammed-saeed-md-phd) "
          - "Built a [Dash](https://plotly.com/dash/)-based ECG signal web app for physicians' retrospective analysis "
          - "Developed features including thumbnail, ECG channel toggle, box measurement & annotation "
          - "Designed user interface guided by and tailored for cardiologists' needs"
          - "Optimized algorithmic efficiency for visualizing signal records of GBs in size"
        media:
          - src: "https://i.imgur.com/Uc7y2gC.png"
            alt: "A screenshot of the tool developed"
            cap: "ECG Visualization & Annotation tool snapshot"
      - bullets:
          - "Devised self-supervised representation learning for multivariate ECG timeseries using symbolic or continuous representations, inspired by NLP and vision pre-training "
          - "Compiled and processed dataset collection of 50K+ 12-lead ECG records from 8 datasets "
          - "Explored training Vision Transformers as ECG backbone model with heart signal data augmentations "
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
    loc: "Barton Research Group @ UMich"
    locLink: "https://brg.engin.umich.edu"
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
          # - "Mentored by [Tyler Toner](https://brg.engin.umich.edu/people/) at [](https://brg.engin.umich.edu) "
          - "Research question: \"How to get the relative pose between two robots directly (as opposed to global positioning), exploiting capacity of both robots?\" "
          - "Case-studied relative pose estimation between two robots to reduce noise resulting from global-positioning-based localization"
          - "Devised algorithmic formalization for static robot collaboration, as a point-matching problem given laser scans "
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
    loc: "Barton Research Group @ UMich"
    locLink: "https://brg.engin.umich.edu"
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
          # - "Mentored by [Max Toothman](https://brg.engin.umich.edu/people/) at []() "
          - "Research question: \"Does the prior failure prediction approach generalize well to similar bearing systems?\" "
          - "Applied prior bearing failure prediction method and analyzed generalization to a new dataset "
          - "Re-organized prior codebase; Formalized prior method into components with applying criteria "
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
          - "Brianstormed UI framework with functional widgets to augment location-specific spaces "
          - "Iterated company logo designs; Prototyped UI layouts for space discovery and management in a team of 6 "
          - "Implemented layouts in Android "
          - "Explored UI animations and style changes pre- and post-joining spaces "
          - "Communicated UX concepts and engineering constraints among design and development teams "
        # media:
        #   - src: "https://i.imgur.com/VtXeq7i.png"
        #     alt: "Mobile space home page, design prototype"
        #   - src: "https://i.imgur.com/qfo2JTN.png"
        #     alt: "Location-inspired logo ideas"
  BENG:
    id: "BENG"
    name: "Bioengineering Imaging Research Assistant"
    time: "May. 2019 - Jul. 2019"
    loc: "Prof. Yu Chen @ UMD"
    locLink: "https://bbi.umd.edu/clark/faculty/371/Yu-Chen"
    tags:
      - txt: "Python"
    sets:
      - bullets:
          # - "Mentored by Xi Qin "
          - "Manually-refined kidney imaging segmentation model annotation for transplant success prediction among a group of 6 annotators "
          - "Surveyed & analyzed image texture filters for kidney imaging noise segmentation "
      - media:
          - src: "https://i.imgur.com/TkBXQdh.png"
            alt: "Law's texture analysis on kidney segmentation imaging"
            cap: "Law's texture analysis output on a kidney imaging sample"
  FIRE:
    id: "FIRE"
    name: "Art Museum Experience Researcher & Mentor"
    time: "Apr. 2019 - May 2020"
    loc: "Prof. Kyungjin Yoo @ UMD"
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
          # - "Mentored by . "
          - "Developed an [ARCore](https://developers.google.com/ar)-based Android app that renders art museum paintings in 6 base colors to educate color theory & raise engagement "
          - "Compared methods for theme-colored visualization; Implemented primary and secondary extraction, color map file parsing "
          - "Explored painting segmentation heuristics based on color & semantics "
        media:
          - isVideo: true
            vid: "ptJVrSIxkDs"
          # - src: "https://i.imgur.com/1DLlZvF.jpg"
          #   alt: "Fire Summit 2019"
          #   cap: "Fire Summit, Summer 2019 with organizer! "
      - bullets:
          - "Mentored 30 students on VR, AR, location intelligence training and art museum experience "
          - "Reviewed students' Unity project submissions "
          - "Wrote Android Studio & AR development tutorial based on Google SDK "
          - "Led lab discussions & provided feedbacks on research proposals 3 times weekly "
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
        - "Participated in [Prof. Fawzi Emad](https://www.cs.umd.edu/people/fpe)'s course challenge about AI soldiers combating in a 2D grid battlefield "
        - "Read an [AI and Games](http://gameaibook.org) textbook; Implemented genetic search algorithms with custom-designed reward heuristics "
        - "Tracked soldiers' in-game behavior and computed statistics to monitor performance "
        - "Automated game restart to increase self-play training trials "
      - media:
          - src: "https://i.imgur.com/ve7GaIb.png"
            alt: "Soldiers fighting themselves during training"
            cap: "Soldier self-learning by fighting with itself"
---
{% include title-script.html title="Projects | Stefan Heng" %}





# Experiences

## Research
{% include exp-entry.html id="ProgGen" %}
{% include exp-entry.html id="PeftU" %}
{% include exp-entry.html id="PiDset" %}
{% include exp-entry.html id="MNLP" %}
{% include exp-entry.html id="BiEnc" %}
{% include exp-entry.html id="ZSTC" %}

<br>


## Industry

{% include exp-entry.html id="EBAY" %}

<br>


## Others
{% include exp-entry.html id="Robot" %}
{% include exp-entry.html id="ECG" %}
{% include exp-entry.html id="PdM" %}
{% include exp-entry.html id="OPTN" %}
{% include exp-entry.html id="BENG" %}
{% include exp-entry.html id="FIRE" %}
{% include exp-entry.html id="SOLD" %}

<br>



