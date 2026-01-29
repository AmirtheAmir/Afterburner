import SubmitButton from "../../components/SubmitButton/SubmitButton";
import CancelButton from "../../components/CancelButton/CancelButton";

type Props = {
  onCancel: () => void;
  onSubmit?: () => void;
};

export default function SubmitSection({ onCancel, onSubmit }: Props) {
  return (
    <div className="flex items-center gap-3">
      <SubmitButton onClick={onSubmit} />
      <CancelButton onClick={onCancel} />
    </div>
  );
}
