This project focuses on creating a unique collection of fictional beasts, including their images, sounds, and language. The goal was to explore generative AI techniques to bring these creatures to life in a multimodal format. The resulting project is very high in its visual noise, refrencing Gen AI's high need for visual power to denoise. The images remind me of abstract and impressionist paintings. 

*images*
For the visual aspect, I trained a model using an animal image dataset available on Hugging Face. I experimented with several parameters, including image size, number of epochs, and generation steps. Images were produced in batches. For example one was generated using 5,000 steps, and others using only 10 steps. The highest steps took 49 minutes. The lowest took 5 seconds once the image size was reduced. All the outputs were extremely noisy. 


*sound*
For the beasts’ sounds, GPU access on Colab was lost midway through the project, so I transitioned to using the Stability AI Audio web interface. While this allowed continued generation of audio clips, the process was less hands-on and limited in terms of experimentation compared to Colab workflows. 
! [the prompts](sound_prompts.png)

*text*
 The language/text was generated using ChatGPT. I provided some images and a prompt to produce 16 phrases. This is attached under the file chat_convo.txt. 

 *quality control*
 Increasing GPU and general processing power would cut down on time for generation. Overall I think this project underscored how concrete the limitedness of computational resources are. I was thinking about the potential strain on natural resources while creating this too. 
