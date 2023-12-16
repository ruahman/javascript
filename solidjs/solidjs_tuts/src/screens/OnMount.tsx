import { createSignal, onMount, For } from "solid-js";

export function OnMount() {
  const [photos, setPhotos] = createSignal([]);

  onMount(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`,
    );
    setPhotos(await res.json());
  });

  return (
    <>
      <h1>Photo album</h1>

      <div class="photos">
        <For each={photos()} fallback={<p>Loading...</p>}>
          {(photo: any) => (
            <figure>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </>
  );
}
