import { Card } from '@/shared/components/ui/Card';
import { Icon } from '@/shared/components/ui/Icon';
import { TextField } from '@/shared/components/ui/TextField';

export function CheckoutForm() {
  return (
    <Card className="p-stack-sm">
      <h2 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="local_shipping" className="text-primary" />
        배송 정보
      </h2>
      <form className="space-y-4">
        <TextField id="recipientName" label="받는 분" placeholder="이름을 입력하세요" type="text" />
        <TextField id="phoneNumber" label="연락처" placeholder="010-XXXX-XXXX" type="tel" />
        <TextField id="address" label="배송지 주소" multiline placeholder="전체 주소를 입력하세요" rows={2} />
        <TextField id="deliveryRequest" label="배송 요청사항 (선택)" placeholder="예: 문 앞에 놓아주세요" type="text" />
      </form>
    </Card>
  );
}
