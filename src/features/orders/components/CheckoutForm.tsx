import { Card } from '@/shared/components/ui/Card';
import { Icon } from '@/shared/components/ui/Icon';
import { TextField } from '@/shared/components/ui/TextField';

export function CheckoutForm() {
  return (
    <Card className="p-stack-sm">
      <h2 className="mb-stack-sm flex items-center gap-2 font-headline text-headline-md text-on-surface">
        <Icon name="local_shipping" className="text-primary" />
        Shipping Details
      </h2>
      <form className="space-y-4">
        <TextField id="recipientName" label="Recipient Name" placeholder="Enter full name" type="text" />
        <TextField id="phoneNumber" label="Phone Number" placeholder="010-XXXX-XXXX" type="tel" />
        <TextField id="address" label="Shipping Address" multiline placeholder="Enter full address" rows={2} />
        <TextField id="deliveryRequest" label="Delivery Request (Optional)" placeholder="e.g., Leave at the door" type="text" />
      </form>
    </Card>
  );
}
