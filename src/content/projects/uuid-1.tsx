import type { ProjectId } from './types';

export const id = 'uuid-1' as const satisfies ProjectId;

export const content = (
  <div>
    <h1 className="text-2xl mb-4">README.md</h1>
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div>
        <p>
          {' '}
          I'm a full-stack developer with a strong focus on front-end
          technologies like React, Next.js, and TypeScript. I thrive on solving
          problems through clean, well-structured code and intuitive user
          interfaces. Over the past few years, I've worked on a range of
          projects—from large-scale platforms to lean startup environments—often
          taking ownership of the entire development process.
        </p>
        <br />
        <p>
          {' '}
          In addition to coding, I have a deep passion for visual storytelling.
          I shoot and edit music videos, short films, and other creative video
          content, and I'm also experienced in photography.
        </p>
        <br />
        <p>
          I enjoy bringing ideas to life—whether it's through code, camera, or a
          blend of both.
        </p>
        <br />
        <div>
          <span>feel free to contact me at: {'  '}</span>
          <a
            className="bg-primary text-alternative outline-1 outline-alternative px-2 py-1 hover:opacity-90 active:opacity-80 transition-opacity"
            href="mailto:contact@agocsvince.com"
          >
            contact@agocsvince.com
          </a>
        </div>
      </div>
      <span className="min-h-[300px]">
        <img
          src="/assets/vince_filmen-6.jpg"
          alt="Portrait of Vince Agocs"
          className="w-2/3"
        />
      </span>
    </div>
  </div>
);
