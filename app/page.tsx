import Image from "next/image"

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="fixed h-screen w-72 overflow-y-auto border-r border-border bg-muted/30 p-10">
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Table of Contents
        </h3>
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#part0"
                className="block py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                Part 0: Camera Calibration and 3D Scanning
              </a>
              <ul className="ml-4 mt-2 space-y-1.5">
                <li>
                  <a
                    href="#part0-background"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Background & Goals
                  </a>
                </li>
                <li>
                  <a
                    href="#part0-pipeline"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Calibration Pipeline
                  </a>
                </li>
                <li>
                  <a
                    href="#part0-pose"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pose Estimation
                  </a>
                </li>
                <li>
                  <a
                    href="#part0-viz"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Visualization Deliverables
                  </a>
                </li>
                <li>
                  <a
                    href="#part0-dataset"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Dataset Packaging
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#part1"
                className="block py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                Part 1: Fit a Neural Field to a 2D Image
              </a>
              <ul className="ml-4 mt-2 space-y-1.5">
                <li>
                  <a
                    href="#part1-architecture"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Model Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#part1-training"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Training Progression
                  </a>
                </li>
                <li>
                  <a
                    href="#part1-hyperparams"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hyperparameter Comparisons
                  </a>
                </li>
                <li>
                  <a
                    href="#part1-psnr"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    PSNR Curve
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#part2"
                className="block py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                Part 2: Fit a Neural Radiance Field from Multi-view Images
              </a>
              <ul className="ml-4 mt-2 space-y-1.5">
                <li>
                  <a
                    href="#part2-ray"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Ray Generation
                  </a>
                </li>
                <li>
                  <a
                    href="#part2-sampling"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Sampling
                  </a>
                </li>
                <li>
                  <a
                    href="#part2-volume"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Volume Rendering
                  </a>
                </li>
                <li>
                  <a
                    href="#part2-training"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Training Visualizations
                  </a>
                </li>
                <li>
                  <a
                    href="#part2-psnr"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    PSNR Curve
                  </a>
                </li>
                <li>
                  <a
                    href="#part2-spherical"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Spherical Rendering Results
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#part26"
                className="block py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                Part 2.6: Training with Your Own Data
              </a>
              <ul className="ml-4 mt-2 space-y-1.5">
                <li>
                  <a
                    href="#part26-gif"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Novel View GIF
                  </a>
                </li>
                <li>
                  <a
                    href="#part26-hyperparams"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hyperparameter Adjustments
                  </a>
                </li>
                <li>
                  <a
                    href="#part26-loss"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Training Loss Plot
                  </a>
                </li>
                <li>
                  <a
                    href="#part26-renders"
                    className="block py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Intermediate Renders
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 px-20 py-14">
        {/* Project Header */}
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="mb-5 text-balance text-4xl font-bold leading-tight text-foreground">
            Neural Fields and Neural Radiance Fields Project
          </h1>
          <p className="text-sm text-muted-foreground">
            <strong>Author:</strong> Brian Le
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Published:</strong> Nov 13, 2025
          </p>

          <div className="mt-8">
            <p className="text-pretty leading-relaxed text-foreground/80">
              This project explores neural representations for 3D scene
              reconstruction and novel view synthesis. Beginning with camera
              calibration and 3D scanning fundamentals, I progress through
              fitting neural fields to 2D images, implementing neural radiance
              fields (NeRF) for multi-view reconstruction, and culminating in
              training custom models on my own captured data. Through hands-on
              implementation, I demonstrate how modern neural rendering
              techniques enable photorealistic 3D scene representation from
              sparse image collections.
            </p>
          </div>
        </header>

        {/* Part 0: Camera Calibration and 3D Scanning */}
        <section id="part0" className="mb-16">
          <h2 className="mb-8 border-b border-border pb-3 text-3xl font-bold text-foreground">
            Part 0: Camera Calibration and 3D Scanning
          </h2>

          {/* <h3
            id="part0-background"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Background & Goals
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Overview of camera calibration theory,
              intrinsic and extrinsic parameters, and the importance of accurate
              calibration for 3D reconstruction.
            </p>
          </div> */}
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  src: "part0_img1.png",
                  caption: "Calibration setup photo",
                },
                {
                  src: "part0_img2.png",
                  caption: "Sample checkerboard detection result",
                },
              ].map(({ src, caption }) => (
                <figure
                  key={src}
                  className="rounded-md border border-border/70 bg-background p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={caption}
                    width={600}
                    height={400}
                    className="mx-auto h-auto w-full rounded"
                  />
                  <figcaption className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* <h3
            id="part0-pipeline"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Calibration Pipeline
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Step-by-step explanation of the
              calibration process, including checkerboard detection and parameter
              estimation.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for calibration pipeline diagrams and images]
            </p>
          </div>

          <h3
            id="part0-pose"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Pose Estimation
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Discussion of pose estimation
              techniques and results.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for pose estimation visualizations]
            </p>
          </div>

          <h3
            id="part0-viz"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Visualization Deliverables
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Visual results showing calibration
              accuracy and 3D point cloud reconstructions.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for 3D visualizations and point clouds]
            </p>
          </div>

          <h3
            id="part0-dataset"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Dataset Packaging
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Description of how the calibrated
              dataset is organized and packaged for downstream tasks.
            </p>
          </div> */}
        </section>

        {/* Part 1: Fit a Neural Field to a 2D Image */}
        <section id="part1" className="mb-16">
          <h2 className="mb-8 border-b border-border pb-3 text-3xl font-bold text-foreground">
            Part 1: Fit a Neural Field to a 2D Image
          </h2>

          <h3
            id="part1-architecture"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Model Architecture
          </h3>
          <div className="mb-8 p-8">
            <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                For this part, I used a simple multilayer perceptron (MLP) to
                learn a 2D image from its pixel coordinates.
              </p>
              <p>
                First, I take the pixel positions (u,v) and normalize
                them to the range [0,1] by dividing by the image width
                and height. Then I apply sinusoidal positional encoding with
                L=10. This adds sine and cosine functions at different
                frequencies, so the final input to the network has 42 values per
                pixel (2 original coordinates + 40 from sin/cos). This helps the
                network represent high-frequency details like edges and textures.
              </p>
              <p>The MLP itself has:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Input dimension: 42</li>
                <li>Hidden layers: 4 hidden layers</li>
                <li>Width: 256 neurons per hidden layer</li>
                <li>Output dimension: 3 (RGB color)</li>
              </ul>
              <p>
                Each hidden layer uses a linear layer followed by a ReLU
                activation. The final layer outputs 3 numbers which go through a
                sigmoid so the predicted colors stay between 0 and 1, matching
                the normalized image.
              </p>
              <p>For training, I:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Randomly sample 10,000 pixels per step (batch size = 10,000)</li>
                <li>Train for 1,000 steps</li>
                <li>Use the Adam optimizer with a learning rate of 1e-2</li>
                <li>Use mean squared error (MSE) as the loss between predicted and true RGB values</li>
                <li>Track image quality using PSNR, computed from the MSE</li>
              </ul>
            </div>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8 text-center">
            <Image
              src="part1_nn_architecture.png"
              alt="Neural field MLP architecture diagram"
              width={1200}
              height={800}
              className="mx-auto h-auto w-full max-w-3xl rounded-md border border-border/80"
              priority
            />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Figure 1. Part 1 neural field model architecture.
            </p>
          </div>

          <h3
            id="part1-training"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Training Progression
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm leading-relaxed text-foreground/80">
              Below is the training progression for the fox image using the
              higher-capacity model (L = 10 and width = 256). As training goes
              on, the network slowly improves—blurry shapes turn into clearer
              outlines, and the details in the fur become sharper. You can see
              the model learning the colors and textures step by step.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-6">
            <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-5">
              {[
                {
                  src: "01_iter_200_pnsr_23.723916097241137.jpg",
                  label: "iter 200 · psnr 23.724",
                },
                {
                  src: "02_iter_400_pnsr_24.328019968075893.jpg",
                  label: "iter 400 · psnr 24.328",
                },
                {
                  src: "03_iter_600_pnsr_24.958747665544404.jpg",
                  label: "iter 600 · psnr 24.959",
                },
                {
                  src: "04_iter_800_pnsr_25.172588393890983.jpg",
                  label: "iter 800 · psnr 25.173",
                },
                {
                  src: "05_iter_1000_pnsr_25.260643260304974.jpg",
                  label: "iter 1000 · psnr 25.261",
                },
              ].map(({ src, label }) => (
                <figure
                  key={src}
                  className="rounded-md border border-border/70 bg-background p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={label}
                    width={400}
                    height={400}
                    className="mx-auto h-auto w-full rounded"
                  />
                  <figcaption className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="mb-8 p-8">
            <p className="text-sm leading-relaxed text-foreground/80">
              Here is the training progression for an image of my selection using same parameters.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-6">
            <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-5">
              {[
                {
                  src: "01_mac_iter_200_pnsr_22.04869633304604.jpg",
                  label: "iter 200 · psnr 22.049",
                },
                {
                  src: "02_mac_iter_400_pnsr_23.479677276793115.jpg",
                  label: "iter 400 · psnr 23.480",
                },
                {
                  src: "03_mac_iter_600_pnsr_24.020806905886303.jpg",
                  label: "iter 600 · psnr 24.021",
                },
                {
                  src: "04_mac_iter_800_pnsr_24.060755025641694.jpg",
                  label: "iter 800 · psnr 24.061",
                },
                {
                  src: "05_mac_iter_1000_pnsr_24.651469455155745.jpg",
                  label: "iter 1000 · psnr 24.651",
                },
              ].map(({ src, label }) => (
                <figure
                  key={src}
                  className="rounded-md border border-border/70 bg-background p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={label}
                    width={400}
                    height={400}
                    className="mx-auto h-auto w-full rounded"
                  />
                  <figcaption className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <h3
            id="part1-hyperparams"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Hyperparameter Comparisons
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm leading-relaxed text-foreground/80">
              With L = 4, the model struggles to represent high-frequency
              details, so the final images look softer and slightly smudged.
              Increasing to L = 10 gives the network access to much
              higher-frequency features, which lets it recover sharper edges and
              finer textures. Overall, higher L captures noticeably more detail.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <figure className="rounded-md border border-border/70 bg-background p-4 shadow-sm">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  L=4, witdh=128
                </p>
                <Image
                  src="01_fox_iter1000_psnr24.015312044909066_width_128_L4.jpg"
                  alt="Hyperparameter comparison result"
                  width={375}
                  height={250}
                  className="mx-auto h-auto w-full max-w-sm rounded"
                />
              </figure>
              <figure className="rounded-md border border-border/70 bg-background p-4 shadow-sm">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  L=4, witdh=256
                </p>
                <Image
                  src="05_iter_1000_pnsr_23.296707321772146_L4.jpg"
                  alt="Hyperparameter comparison result"
                  width={375}
                  height={250}
                  className="mx-auto h-auto w-full max-w-sm rounded"
                />
              </figure>
              <figure className="rounded-md border border-border/70 bg-background p-4 shadow-sm">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  L=10, witdh=128
                </p>
                <Image
                  src="01_fox_iter1000_psnr25.33747806619481_width_128.jpg"
                  alt="Hyperparameter comparison result"
                  width={375}
                  height={250}
                  className="mx-auto h-auto w-full max-w-sm rounded"
                />
              </figure>
              <figure className="rounded-md border border-border/70 bg-background p-4 shadow-sm">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  L=10, witdh=256
                </p>
                <Image
                  src="05_iter_1000_pnsr_25.260643260304974.jpg"
                  alt="Hyperparameter comparison result"
                  width={375}
                  height={250}
                  className="mx-auto h-auto w-full max-w-sm rounded"
                />
              </figure>
            </div>
          </div>

          <h3
            id="part1-psnr"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            PSNR Curve
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm leading-relaxed text-foreground/80">
            The PSNR curve rises quickly during the first couple hundred steps as the model learns the basic structure of the image. After that, the improvements slow down and the curve levels off around 25 dB, showing the network gradually refining smaller details as training continues.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8 text-center">
            <Image
              src="part1_train_psnr.png"
              alt="PSNR curve for Part 1 training"
              width={900}
              height={600}
              className="mx-auto h-auto w-full max-w-2xl rounded-md border border-border/80"
            />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Figure 2. PSNR progression over 1,000 training steps.
            </p>
          </div>
        </section>

        {/* Part 2: Fit a Neural Radiance Field from Multi-view Images */}
        <section id="part2" className="mb-16">
          <h2 className="mb-8 border-b border-border pb-3 text-3xl font-bold text-foreground">
            Part 2: Fit a Neural Radiance Field from Multi-view Images
          </h2>

          <h4 className="text-xl font-semibold text-foreground">
            Part 2.1: Create Rays from Cameras
          </h4>
          <div className="mb-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              For Part 2.1, I built the full pipeline to convert pixel
              coordinates into world-space rays. I first created the intrinsic
              matrix <em>K</em> from the focal length and image center. Then I
              wrote a <code>transform</code> function that applies the
              camera-to-world matrix to any 3D point. In
              <code>pixel_to_camera</code>, I invert <em>K</em> to lift each
              pixel <code>(u, v)</code> into a 3D point at depth 1. Finally,
              <code>pixel_to_ray</code> transforms these points to world space,
              grabs the camera origin from <code>c2w</code>, and normalizes the
              direction. This gives clean ray origins and directions for every
              pixel.
            </p>
          </div>


          <div className="mb-4">
            <h4 className="text-xl font-semibold text-foreground">
              Part 2.2: Sampling
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              For Part 2.2, I implemented random ray sampling and point sampling
              along each ray. First, I pick a random training image, choose
              random pixel locations, and convert them into ray origins and
              directions. Then, for each ray, I divide the depth range into
              intervals and sample 64 points between <code>near</code> and
              <code>far</code>, adding noise during training to avoid
              overfitting. This produces the 3D sample points needed for NeRF
              volume rendering.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-foreground">
              Part 2.3: Putting the Dataloading All Together
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              For Part 2.3, I created a <code>RaysData</code> class that
              precomputes every ray in the dataset. For each image, I store its
              pixel coordinates, RGB values, and corresponding ray origins and
              directions using <code>pixel_to_ray</code>. I flatten everything
              into big arrays so sampling becomes easy. The
              <code>sample_rays</code> function then pulls random rays and their
              colors from all images at once, giving a clean multiview ray-based
              dataloader for training NeRF.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-foreground">
              Part 2.4: Neural Radiance Field
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              For Part 2.4, I built a full NeRF MLP that predicts density and
              color from 3D sample points and viewing directions. I applied
              high-frequency positional encoding to both the xyz coordinates and
              the ray directions. The network has two stages: one branch outputs
              density, and the other combines learned features with encoded
              directions to predict RGB. I also used a skip connection by
              concatenating the encoded xyz back into the middle layers to help
              preserve spatial information.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-foreground">
              Part 2.5: Volume Rendering
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              For Part 2.5, I implemented the NeRF volume-rendering equation in
              PyTorch. I converted densities into alpha values, computed
              accumulated transmittance with <code>cumsum</code>, and used those
              to get per-sample weights. Finally, I combined the weights with
              the predicted RGBs to produce the final rendered color for each
              ray.
            </p>
          </div>

          <h3
            id="part2-ray-sampling"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Ray and Sampling Visualization
          </h3>
          <div className="my-8">
            <p className="text-sm leading-relaxed text-foreground/80">
              I used Viser to visualize my rays and sampled 3D points. This let
              me confirm that rays originated from the correct camera poses,
              pointed through the right pixels, and stayed inside the camera
              frustum. I also checked that the sampled points along each ray
              followed the expected near-to-far depth range.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  src: "rays_vis1.png",
                  caption: "Ray visualization with camera frustum overlay",
                },
                {
                  src: "rays_vis2.png",
                  caption: "Sampled 3D points along rays",
                },
              ].map(({ src, caption }) => (
                <figure
                  key={src}
                  className="rounded-md border border-border/70 bg-background p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={caption}
                    width={600}
                    height={400}
                    className="mx-auto h-auto w-full rounded"
                  />
                  <figcaption className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <h3
            id="part2-training"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Training Visualizations
          </h3>
          <div className="mb-6">
            <p className="text-sm leading-relaxed text-foreground/80">
              This figure shows the NeRF’s reconstruction of the first
              validation view at six training checkpoints. Each panel is the
              rendered image at a given optimization step, with its
              corresponding PSNR shown in the title. Early in training, the
              predictions are blurry and colors are washed out, indicating that
              the network has only learned coarse structure. As training
              continues, edges sharpen, fine geometric details of the Lego model
              appear, and colors become more accurate. The steady increase in
              PSNR across snapshots reflects this qualitative improvement and
              confirms that the model is fitting the multi-view data more
              effectively over time.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8">
            <Image
              src="lego_val_6_img.png"
              alt="Validation render during NeRF training"
              width={900}
              height={600}
              className="mx-auto h-auto w-full max-w-3xl rounded-md border border-border/70"
            />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Figure. Validation view sampled mid-training.
            </p>
          </div>

          <h3
            id="part2-psnr"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            PSNR Curve
          </h3>
          <div className="mb-6">
            <p className="text-sm leading-relaxed text-foreground/80">
              These plots show the PSNR over training steps for the NeRF model on
              the Lego scene. Both training and validation PSNR start around
              11–12 dB, then rise quickly during the first ~150 steps as the
              network learns coarse geometry and colors. After that, the curves
              increase more slowly but steadily, eventually reaching around
              23–24 dB. The validation curve closely tracks the training curve
              with no noticeable gap, suggesting the model is fitting the
              multi-view data well without strong overfitting. Overall, the
              curves confirm stable optimization and good generalization to the
              held-out views.
            </p>
          </div>

          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  src: "lego_train_pnsr.png",
                  caption: "Training PSNR for NeRF lego scene",
                },
                {
                  src: "lego_val_pnsr.png",
                  caption: "Validation PSNR for NeRF lego scene",
                },
              ].map(({ src, caption }) => (
                <figure
                  key={src}
                  className="rounded-md border border-border/70 bg-background p-3 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={caption}
                    width={600}
                    height={400}
                    className="mx-auto h-auto w-full rounded"
                  />
                  <figcaption className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <h3
            id="part2-spherical"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Spherical Rendering Results
          </h3>
          <div className="mb-6">
            <p className="text-sm leading-relaxed text-foreground/80">
            Using the trained NeRF, I rendered novel Lego views along the provided c2ws_test camera trajectory to produce a spherical fly-around video of the scene.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-8 text-center">
            <video
              src="lego_nerf.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto w-full max-w-3xl rounded-md border border-border/70"
            />
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
              Figure. Autoplaying spherical render from the trained NeRF on the
              Lego scene.
            </p>
          </div>
        </section>

        {/* Part 2.6: Training with Your Own Data
        <section id="part26" className="mb-16">
          <h2 className="mb-8 border-b border-border pb-3 text-3xl font-bold text-foreground">
            Part 2.6: Training with Your Own Data
          </h2>

          <h3
            id="part26-gif"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Novel View GIF
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Animated visualization showing smooth
              novel view synthesis from your custom captured scene.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for novel view synthesis GIF/animation]
            </p>
          </div>

          <h3
            id="part26-hyperparams"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Hyperparameter Adjustments
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Discussion of hyperparameter tuning
              specific to your custom dataset and scene characteristics.
            </p>
          </div>

          <h3
            id="part26-loss"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Training Loss Plot
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Loss curve showing training convergence
              for your custom scene.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for training loss plot]
            </p>
          </div>

          <h3
            id="part26-renders"
            className="mb-5 mt-10 text-2xl font-semibold text-foreground"
          >
            Intermediate Renders
          </h3>
          <div className="mb-8 p-8">
            <p className="text-sm italic text-muted-foreground">
              Content will be added here: Gallery of intermediate renderings at
              various training checkpoints.
            </p>
          </div>
          <div className="my-8 rounded-md border border-dashed border-border/60 bg-muted/20 p-16 text-center">
            <p className="text-sm text-muted-foreground">
              [Placeholder for grid of intermediate render results]
            </p>
          </div>
        </section> */}
      </main>
    </div>
  )
}
