import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';

interface ExpirationSelectProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

export function ExpirationSelect({ value, onChange }: ExpirationSelectProps) {
  const [selectValue, setSelectValue] = useState<string>('never');
  const [customDate, setCustomDate] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset to dropdown when closed
      setShowCalendar(false);
    }
  };

  const handleSelectChange = (val: string) => {
    if (val === 'custom') {
      setShowCalendar(true);
      setSelectValue(val);
      setIsOpen(true);
      return;
    }
    
    setSelectValue(val);
    setShowCalendar(false);
    
    if (val === 'never') {
      onChange(undefined);
    } else if (val === '1day') {
      onChange(dayjs().add(1, 'day').valueOf());
    } else if (val === '7days') {
      onChange(dayjs().add(7, 'day').valueOf());
    } else if (val === '30days') {
      onChange(dayjs().add(30, 'day').valueOf());
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setCustomDate(date);
    if (date) {
      onChange(dayjs(date).valueOf());
      setShowCalendar(false);
      setIsOpen(false);
    }
  };

  const getDisplayValue = () => {
    if (!value) return 'Does Not Expire';
    if (selectValue === '1day') return '1 day';
    if (selectValue === '7days') return '7 days';
    if (selectValue === '30days') return '30 days';
    if (selectValue === 'custom' && customDate) {
      return dayjs(customDate).format('MMM D, YYYY');
    }
    return 'Does Not Expire';
  };

  return (
    <Select value={selectValue} onValueChange={handleSelectChange} open={isOpen} onOpenChange={handleOpenChange}>
      <SelectTrigger className='h-10 rounded-md w-[200px]'>
        <SelectValue>{getDisplayValue()}</SelectValue>
      </SelectTrigger>
      <SelectContent position='popper' side='bottom' align='start'>
        {!showCalendar ? (
          <>
            <SelectItem value='never'>Does Not Expire</SelectItem>
            <SelectItem value='1day'>1 day</SelectItem>
            <SelectItem value='7days'>7 days</SelectItem>
            <SelectItem value='30days'>30 days</SelectItem>
            <div
              className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-foreground/10 hover:text-foreground'
              onClick={(e) => {
                e.preventDefault();
                setShowCalendar(true);
                setSelectValue('custom');
              }}
            >
              Custom
            </div>
          </>
        ) : (
          <Calendar
            mode='single'
            selected={customDate}
            onSelect={handleDateSelect}
            disabled={(date) => date < new Date()}
          />
        )}
      </SelectContent>
    </Select>
  );
}

