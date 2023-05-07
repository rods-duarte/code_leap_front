import * as s from './style';

export default function CreatePost() {
  return (
    <s.CreatePost>
      <s.Title>What&apos;s on your mind?</s.Title>
      <s.Form>
        <s.Label htmlFor="post_title">Title</s.Label>
        <s.Input id="post_title" type="text" placeholder="Hello world" />
        <s.Label htmlFor="post_content">Content</s.Label>
        <s.Textarea id="post_content" type="text" placeholder="Content here" />
      </s.Form>
    </s.CreatePost>
  );
}
